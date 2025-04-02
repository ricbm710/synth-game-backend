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
exports.getLeaderboard = exports.createAttempt = void 0;
//models
const playerModel_1 = require("../models/playerModel");
const attemptModel_1 = require("../models/attemptModel");
const createAttempt = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { player_name, score } = req.body;
    //check if name is valid
    if (typeof player_name !== "string" || !player_name.trim()) {
        res.status(400).json({ error: "player_name must be a non-empty string" });
        console.error("player_name must be a non-empty string.");
        return;
    }
    try {
        // Get player_id
        const player_id = yield (0, playerModel_1.getPlayerIdFromDb)(player_name);
        if (!player_id) {
            console.error("Unable to find player_id.");
            res.status(400).json({ error: "Unable to find player_id" });
            return;
        }
        // Store attempt
        yield (0, attemptModel_1.createAttemptInDb)(player_id, score);
        res.status(201).json({ message: "Attempt created successfully" });
        console.log("Attempt created successfully");
    }
    catch (error) {
        console.error(error);
        const message = error instanceof Error
            ? "Something went wrong on the server"
            : "Unknown error";
        res.status(500).json({ error: message });
    }
});
exports.createAttempt = createAttempt;
const getLeaderboard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, attemptModel_1.getLeaderboardFromDb)();
        res.status(200).json(result);
        console.log("getLeaderboard successful");
    }
    catch (error) {
        console.error(error);
        const message = error instanceof Error
            ? "Something went wrong on the server"
            : "Unknown error";
        res.status(500).json({ error: message });
    }
});
exports.getLeaderboard = getLeaderboard;
