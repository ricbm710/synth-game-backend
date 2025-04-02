"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//controllers
const synthController_1 = require("../controllers/synthController");
const router = express_1.default.Router();
router.get("/synths", synthController_1.getAllSynths);
router.get("/synths/:id", synthController_1.getSynthById);
router.patch("/synths/:id/stats", synthController_1.updateSynthTimes);
exports.default = router;
