import dotenv from "dotenv";
import express from "express";
import cors from "cors";
//db config
import { pool } from "./db";
//routes
import synthRoutes from "../src/routes/synthRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(cors());
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Synthgame Backend");
});

app.use("/api", synthRoutes);

//start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

//connection test
pool
  .connect()
  .then(() => console.log(`✅ Connected to PostgreSQL`))
  .catch((err) => console.error("❌ Database connection error:", err));
