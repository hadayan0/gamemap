import { sql } from '@vercel/postgres';

export async function fetchIcontype(id: string) {
  try {
    console.log(`fetching... id=${id}`);
    const data = await sql`
      SELECT url, alt, width, height
      FROM icontype
      WHERE id=${id}
    `;
    console.log("fetched.");
    if (data.rowCount === 0) {
      return null;
    }
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Database Error:');
  }
}