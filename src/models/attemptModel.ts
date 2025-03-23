//db config
import { query } from "../db";

export const createAttemptInDb = async (player_id: number, score: number) => {
  const time_started = new Date().toISOString(); // Store in UTC
  await query(
    "insert into attempts (player_id, time_started, score) values ($1,$2,$3)",
    [player_id, time_started, score]
  );
};
