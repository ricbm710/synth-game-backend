"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
//db config
const db_1 = require("./db");
//routes
const synthRoutes_1 = __importDefault(require("./routes/synthRoutes"));
const playerRoutes_1 = __importDefault(require("./routes/playerRoutes"));
const attemptRoutes_1 = __importDefault(require("./routes/attemptRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
//middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//routes
app.get("/", (req, res) => {
    res.send("Synthgame Backend");
});
app.use("/api", synthRoutes_1.default);
app.use("/api", playerRoutes_1.default);
app.use("/api", attemptRoutes_1.default);
//start
app.listen(PORT, () => {
    // console.log(`Server running on http://localhost:${PORT}`);
});
//connection test
db_1.pool
    .connect()
    .then(() => console.log(`✅ Connected to PostgreSQL`))
    .catch((err) => console.error("❌ Database connection error:", err));
