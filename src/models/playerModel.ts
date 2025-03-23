//db config
import { query } from "../db";

export const createPlayerInDb = async (player_name: string) => {
  await query("insert into players (player_name) values ($1)", [player_name]);
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

export const getPlayerIdFromDb = async (
  player_name: string
): Promise<number | null> => {
  const result = await query("select id from players where player_name=$1", [
    player_name,
  ]);
  return result.rows.length > 0 ? (result.rows[0] as number) : null;
};
