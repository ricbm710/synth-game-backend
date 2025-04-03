//pg
import { Pool } from "pg";
//dotenv
import "dotenv/config";

const dbLocation = process.env.DB_LOCATION;

export const pool =
  dbLocation === "neon"
    ? new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }, // Required for Neon DB
      })
    : new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: Number(process.env.DB_PORT),
      });

//query function (used in models)
export async function query<T>(
  text: string,
  params?: any[]
): Promise<{ rows: T[] }> {
  const result = await pool.query(text, params);
  return result;
}
