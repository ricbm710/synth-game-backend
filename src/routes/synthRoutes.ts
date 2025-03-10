import express from "express";
//controllers
import { getAllSynths, getSynthById } from "../controllers/synthController";

const router = express.Router();

router.get("/synths", getAllSynths);
router.get("/synths/:id", getSynthById);

export default router;
