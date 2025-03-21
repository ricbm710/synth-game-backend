import { Request, Response } from "express";
//models
import { getAllSynthsFromDb, getSynthByIdFromDb } from "../models/synthModel";

export const getAllSynths = async (req: Request, res: Response) => {
  try {
    const result = await getAllSynthsFromDb();
    res.status(200).json(result);
  } catch (error: unknown) {
    console.error(error);
    const message =
      error instanceof Error
        ? "Something went wrong on the server"
        : "Unknown error";
    res.status(500).json({ error: message });
  }
};

export const getSynthById = async (req: Request, res: Response) => {
  //*get id from params
  const { id } = req.params;
  const synthId = Number(id);
  //*check if it's valid
  if (!id || isNaN(synthId)) {
    res.status(400).json({ error: "Synth ID is not valid." });
    return;
  }
  //*proceed
  try {
    const result = await getSynthByIdFromDb(synthId);
    if (!result) {
      res.status(404).json({ error: "Synth not found in DB." });
      return;
    }
    res.status(200).json(result);
  } catch (error: unknown) {
    console.error(error);
    const message =
      error instanceof Error
        ? "Something went wrong on the server"
        : "Unknown error";
    res.status(500).json({ error: message });
  }
};
