import { sql } from '@vercel/postgres';
import {
  Icontype,
  Marker,
} from '@/app/lib/definitions';

interface IcontypeMap {
  [key: string]: Promise<Icontype>;
}
const icontypeMap: IcontypeMap = {};

export async function getIcontypeFromCache(id: string) {
  if (!icontypeMap[id]) {
    icontypeMap[id] = fetchIcontype(id);
  }
  return icontypeMap[id];
}

export async function fetchIcontype(id: string): Promise<Icontype> {
  try {
    // return { url: "", alt: "", width: 0, height: 0, };
    // console.log(`fetching... id=${id}`);
    const data = await sql`
      SELECT url, alt, width, height
      FROM icontype
      WHERE id=${id}
    `;
    console.log(`fetched icontype id=${id}`);
    if (data.rowCount === 0) {
      throw new Error('Icontype not found.');
    }
    return data.rows[0] as Icontype;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Database Error:');
  }
}

export async function fetchMarkers(): Promise<Marker[]> {
  try {
    // return [{ id: "", icontype: "", posx: 0, posy: 0, text: "", note: "", textposition: 0, position: "east" }];
    // console.log("fetching...");
    const data = await sql`
      SELECT id, icontype, posx, posy, text, note, textposition
      FROM marker
    `;
    console.log("fetched");
    console.log(data.rows);
    const markers = data.rows.map((marker) => ({
      ...marker,
      position: _getPositionString(marker.textposition),
    }));
    return markers as Marker[];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Database Error:');
  }

  function _getPositionString(position: number) {
    switch (position) {
      case 0:
        return "east";
      case 1:
        return "west";
      case 2:
        return "south";
      case 3:
        return "north";
    }
  }
}