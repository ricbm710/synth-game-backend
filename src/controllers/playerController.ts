import { Request, Response } from "express";
//model
import { createPlayerInDb, playerExistsInDb } from "../models/playerModel";

export const createPlayer = async (req: Request, res: Response) => {
  const { player_name } = req.body;
  //check if name is valid
  if (typeof player_name !== "string" || !player_name.trim()) {
    res.status(400).json({ error: "player_name must be a non-empty string" });
    console.error("player_name must be a non-empty string.");
    return;
  }
  //check if name doesn't exist
  const playerExists = await playerExistsInDb(player_name);
  console.log(playerExists);
  if (playerExists) {
    res.status(400).json({ error: "player_name already exists." });
    console.error("player_name already exists.");
    return;
  }

  try {
    await createPlayerInDb(player_name);
    res
      .status(201)
      .json({ message: `Player ${player_name} created successfully` });
    console.log("createPlayer successful");
  } catch (error: unknown) {
    console.error(error);
    const message =
      error instanceof Error
        ? "Something went wrong on the server"
        : "Unknown error";
    res.status(500).json({ error: message });
  }
};
