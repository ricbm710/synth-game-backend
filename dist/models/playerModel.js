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
exports.getPlayerIdFromDb = exports.playerExistsInDb = exports.createPlayerInDb = void 0;
//db config
const db_1 = require("../db");
const createPlayerInDb = (player_name) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, db_1.query)("insert into players (player_name) values ($1)", [player_name]);
});
exports.createPlayerInDb = createPlayerInDb;
const playerExistsInDb = (player_name) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, db_1.query)("select * from players where player_name=$1", [
        player_name,
    ]);
    if (result.rows.length > 0) {
        return true;
    }
    else {
        return false;
    }
});
exports.playerExistsInDb = playerExistsInDb;
const getPlayerIdFromDb = (player_name) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, db_1.query)("select id from players where player_name=$1", [player_name]);
    return result.rows.length > 0 ? result.rows[0].id : null;
});
exports.getPlayerIdFromDb = getPlayerIdFromDb;
