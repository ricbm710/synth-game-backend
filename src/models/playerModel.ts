//db config
import { query } from "../db";

export const createPlayerInDb = async (player_name: string): Promise<null> => {
  const result = await query("insert into players (player_name) values ($1)", [
    player_name,
  ]);
  return null;
};

export const playerExistsInDb = async (
  player_name: string
): Promise<boolean> => {
  const result = await query("select * from players where player_name=$1", [
    player_name,
  ]);
  if (result.rows.length > 0) {
    return true;
  } else {
    return false;
  }
};
