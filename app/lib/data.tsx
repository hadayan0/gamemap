import { sql } from '@vercel/postgres';

export async function fetchIcontype(id: string) {
  try {
    // console.log(`fetching... id=${id}`);
    const data = await sql`
      SELECT url, alt, width, height
      FROM icontype
      WHERE id=${id}
    `;
    // console.log("fetched.");
    if (data.rowCount === 0) {
      return null;
    }
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Database Error:');
  }
}

export async function fetchMarkers() {
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
    return markers;
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