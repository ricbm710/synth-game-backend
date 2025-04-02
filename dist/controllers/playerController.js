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
exports.createPlayer = void 0;
//model
const playerModel_1 = require("../models/playerModel");
const createPlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { player_name } = req.body;
    //check if name is valid
    if (typeof player_name !== "string" || !player_name.trim()) {
        res.status(400).json({ error: "player_name must be a non-empty string" });
        console.error("player_name must be a non-empty string.");
        return;
    }
    //check if name doesn't exist
    const playerExists = yield (0, playerModel_1.playerExistsInDb)(player_name);
    if (playerExists) {
        res.status(400).json({ error: "player_name already exists." });
        console.error("player_name already exists.");
        return;
    }
    try {
        yield (0, playerModel_1.createPlayerInDb)(player_name);
        res
            .status(201)
            .json({ message: `Player ${player_name} created successfully` });
        console.log("createPlayer successful");
    }
    catch (error) {
        console.error(error);
        const message = error instanceof Error
            ? "Something went wrong on the server"
            : "Unknown error";
        res.status(500).json({ error: message });
    }
});
exports.createPlayer = createPlayer;
