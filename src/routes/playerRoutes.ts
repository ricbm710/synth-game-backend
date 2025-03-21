import express from "express";
//controller
import { createPlayer } from "../controllers/playerController";

const router = express.Router();

router.post("/players", createPlayer);

export default router;
