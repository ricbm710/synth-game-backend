import express from "express";
//controller
import { createAttempt } from "../controllers/attemptController";

const router = express.Router();

router.post("/attempts", createAttempt);

export default router;
