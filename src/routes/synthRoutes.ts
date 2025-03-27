import express from "express";
//controllers
import {
  getAllSynths,
  getSynthById,
  updateSynthTimes,
} from "../controllers/synthController";

const router = express.Router();

router.get("/synths", getAllSynths);
router.get("/synths/:id", getSynthById);
router.patch("/synths/:id/stats", updateSynthTimes);

export default router;
