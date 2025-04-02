"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//controller
const playerController_1 = require("../controllers/playerController");
const router = express_1.default.Router();
router.post("/players", playerController_1.createPlayer);
exports.default = router;
