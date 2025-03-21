import { Request, Response } from "express";
//model
import { createPlayerInDb } from "../models/playerModel";

export const createPlayer = async (req: Request, res: Response) => {
  const { player_name } = req.body;
  if (typeof player_name !== "string" || !player_name.trim()) {
    res.status(400).json({ error: "player_name must be a non-empty string" });
    return;
  }
  try {
    await createPlayerInDb(player_name);
    res.status(201).json({ message: "Player created successfully" });
  } catch (error: unknown) {
    console.error(error);
    const message =
      error instanceof Error
        ? "Something went wrong on the server"
        : "Unknown error";
    res.status(500).json({ error: message });
  }
};
