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
exports.updateSynthTimesFromDb = exports.getSynthByIdFromDb = exports.getAllSynthsFromDb = void 0;
//db config
const db_1 = require("../db");
const getAllSynthsFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, db_1.query)("select id,manufacturer,model,description,image_url,times_selected,times_guessed from synths");
    return result.rows;
});
exports.getAllSynthsFromDb = getAllSynthsFromDb;
const getSynthByIdFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, db_1.query)("select manufacturer,model,description,image_url,times_selected,times_guessed from synths where id=$1", [id]);
    return result.rows[0] || null;
});
exports.getSynthByIdFromDb = getSynthByIdFromDb;
const updateSynthTimesFromDb = (id, guessed) => __awaiter(void 0, void 0, void 0, function* () {
    const queryString = `
    UPDATE synths 
    SET times_selected = times_selected + 1
    ${guessed ? ", times_guessed = times_guessed + 1" : ""}
    WHERE id = $1
  `;
    console.log(queryString);
    yield (0, db_1.query)(queryString, [id]);
});
exports.updateSynthTimesFromDb = updateSynthTimesFromDb;
