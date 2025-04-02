"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//controller
const attemptController_1 = require("../controllers/attemptController");
const router = express_1.default.Router();
router.post("/attempts", attemptController_1.createAttempt);
router.get("/attempts/leaderboard", attemptController_1.getLeaderboard);
exports.default = router;
