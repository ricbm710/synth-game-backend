import express from "express";
//controller
import {
  createAttempt,
  getLeaderboard,
} from "../controllers/attemptController";

const router = express.Router();

router.post("/attempts", createAttempt);
router.get("/attempts/leaderboard", getLeaderboard);

export default router;
