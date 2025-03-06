import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { pool } from "./db";

dotenv.config();

const app = express();
const PORT = process.env.DB_PORT || 5432;

//middleware
app.use(cors());
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Synthgame Backend");
});

//start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

//connection test
pool
  .connect()
  .then(() => console.log(`✅ Connected to PostgreSQL`))
  .catch((err) => console.error("❌ Database connection error:", err));
