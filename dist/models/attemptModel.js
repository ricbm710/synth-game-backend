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
exports.getLeaderboardFromDb = exports.createAttemptInDb = void 0;
//db config
const db_1 = require("../db");
const createAttemptInDb = (player_id, score) => __awaiter(void 0, void 0, void 0, function* () {
    const time_started = new Date().toISOString(); // Store in UTC
    yield (0, db_1.query)("insert into attempts (player_id, time_started, score) values ($1,$2,$3)", [player_id, time_started, score]);
});
exports.createAttemptInDb = createAttemptInDb;
const getLeaderboardFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    //* limit should vary
    const result = yield (0, db_1.query)("select p.player_name as Player, a.score as Score, to_char(a.time_started, 'Mon/DD/YYYY') as Date, to_char(a.time_started, 'HH24:MI') as Time from attempts a, players p where a.player_id = p.id order by a.score desc limit 10");
    return result.rows;
});
exports.getLeaderboardFromDb = getLeaderboardFromDb;
