import { Request, Response } from "express";
//models
import { getPlayerIdFromDb } from "../models/playerModel";
import { createAttemptInDb } from "../models/attemptModel";

export const createAttempt = async (req: Request, res: Response) => {
  const { player_name, score } = req.body;
  //check if name is valid
  if (typeof player_name !== "string" || !player_name.trim()) {
    res.status(400).json({ error: "player_name must be a non-empty string" });
    console.error("player_name must be a non-empty string.");
    return;
  }

  try {
    // Get player_id
    const player_id = await getPlayerIdFromDb(player_name);
    if (!player_id) {
      console.error("Unable to find player_id.");
      res.status(400).json({ error: "Unable to find player_id" });
      return;
    }

    // Store attempt
    await createAttemptInDb(player_id, score);
    res.status(201).json({ message: "Attempt created successfully" });
    console.log("Attempt created successfully");
  } catch (error: unknown) {
    console.error(error);
    const message =
      error instanceof Error
        ? "Something went wrong on the server"
        : "Unknown error";
    res.status(500).json({ error: message });
  }
};
