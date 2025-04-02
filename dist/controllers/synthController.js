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
exports.updateSynthTimes = exports.getSynthById = exports.getAllSynths = void 0;
//models
const synthModel_1 = require("../models/synthModel");
const getAllSynths = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, synthModel_1.getAllSynthsFromDb)();
        res.status(200).json(result);
        console.log("getAllSynths successful");
    }
    catch (error) {
        console.error(error);
        const message = error instanceof Error
            ? "Something went wrong on the server"
            : "Unknown error";
        res.status(500).json({ error: message });
    }
});
exports.getAllSynths = getAllSynths;
const getSynthById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //*get id from params
    const { id } = req.params;
    const synthId = Number(id);
    //*check if it's valid
    if (!id || isNaN(synthId)) {
        res.status(400).json({ error: "Synth ID is not valid." });
        return;
    }
    //*proceed
    try {
        const result = yield (0, synthModel_1.getSynthByIdFromDb)(synthId);
        if (!result) {
            res.status(404).json({ error: "Synth not found in DB." });
            return;
        }
        res.status(200).json(result);
        console.log("getSynthById Successful");
    }
    catch (error) {
        console.error(error);
        const message = error instanceof Error
            ? "Something went wrong on the server"
            : "Unknown error";
        res.status(500).json({ error: message });
    }
});
exports.getSynthById = getSynthById;
const updateSynthTimes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //*get id from params
    const { id } = req.params;
    const synthId = Number(id);
    const { guessed } = req.body;
    console.log(synthId, typeof synthId);
    console.log(guessed, typeof guessed);
    try {
        yield (0, synthModel_1.updateSynthTimesFromDb)(synthId, guessed);
        res.status(201).json({ message: "Synth updated successfully." });
    }
    catch (error) {
        console.error(error);
        const message = error instanceof Error
            ? "Something went wrong on the server"
            : "Unknown error";
        res.status(500).json({ error: message });
    }
});
exports.updateSynthTimes = updateSynthTimes;
