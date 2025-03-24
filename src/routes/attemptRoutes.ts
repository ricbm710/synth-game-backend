import express from "express";
//controller
import {
  createAttempt,
  getLeaderboard,
} from "../controllers/attemptController";

const router = express.Router();

router.post("/attempts", createAttempt);
router.post("/attempts/leaderboard", getLeaderboard);

export default router;
