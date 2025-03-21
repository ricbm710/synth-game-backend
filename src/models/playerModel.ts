//db config
import { query } from "../db";

export const createPlayerInDb = async (player_name: string) => {
  const result = await query("insert into players (player_name) values ($1)", [
    player_name,
  ]);
};
