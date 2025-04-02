import { pool } from "./db";

async function testConnection() {
  try {
    const res = await pool.query(
      "SELECT current_database(), inet_server_addr(), inet_server_port();"
    );
    console.log("Connected to DB:", res.rows[0]);
    console.log("DB_LOCATION:", process.env.DB_LOCATION);
    console.log("Using DATABASE_URL:", process.env.DATABASE_URL);
  } catch (error) {
    console.error("Database connection error:", error);
  } finally {
    pool.end();
  }
}

testConnection();

// node -r ts-node/register src/testNeon.ts
