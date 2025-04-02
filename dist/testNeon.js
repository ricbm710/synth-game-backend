"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
function testConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield db_1.pool.query("SELECT current_database(), inet_server_addr(), inet_server_port();");
            console.log("Connected to DB:", res.rows[0]);
            console.log("DB_LOCATION:", process.env.DB_LOCATION);
            console.log("Using DATABASE_URL:", process.env.DATABASE_URL);
        }
        catch (error) {
            console.error("Database connection error:", error);
        }
        finally {
            db_1.pool.end();
        }
    });
}
testConnection();
// node -r ts-node/register src/testNeon.ts
