import dotenv from "dotenv";
import express from "express";
import cors from "cors";
//db config
import { pool } from "./db";
//routes
import synthRoutes from "./routes/synthRoutes";
import playerRoutes from "./routes/playerRoutes";
import attemptRoutes from "./routes/attemptRoutes";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(cors());
app.use(express.json());

//routes
app.get("/", (req, res) => {
  //debug
  console.log(process.env.DATABASE_URL);
  res.send("Synthgame Backend");
});

app.use("/api", synthRoutes);
app.use("/api", playerRoutes);
app.use("/api", attemptRoutes);

//start
app.listen(PORT, () => {
  // console.log(`Server running on http://localhost:${PORT}`);
});

//connection test
pool
  .connect()
  .then(() => console.log(`✅ Connected to PostgreSQL`))
  .catch((err) => console.error("❌ Database connection error:", err));
