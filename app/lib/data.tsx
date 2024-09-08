import { sql } from '@vercel/postgres';

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

type Icontype = {
  url: string;
  alt: string;
  width: number;
  height: number;
}

export async function fetchIcontype(id: string): Promise<Icontype> {
  try {
    // console.log(`fetching... id=${id}`);
    const data = await sql`
      SELECT url, alt, width, height
      FROM icontype
      WHERE id=${id}
    `;
    console.log(`fetched icontype id=${id}`);
    if (data.rowCount === 0) {
      // return null;
      throw new Error('Icontype not found.');
    }
    return data.rows[0] as Icontype;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Database Error:');
  }
}

type Marker = {
  id: string;
  icontype: string;
  posx: number;
  posy: number;
  text: string;
  note: string;
  textposition: number;
  position: 'east' | 'west' | 'south' | 'north';
}
export async function fetchMarkers(): Promise<Marker[]> {
  try {
    // console.log("fetching...");
    const data = await sql`
      SELECT id, icontype, posx, posy, text, note, textposition
      FROM marker
    `;
    // console.log("fetched");
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