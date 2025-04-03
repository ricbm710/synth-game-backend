//db config
import { query } from "../db";
//types
import { Leaderboard } from "../types/Leaderboard";

export const createAttemptInDb = async (player_id: number, score: number) => {
  const time_started = new Date().toISOString(); // Store in UTC
  await query(
    "insert into attempts (player_id, time_started, score) values ($1,$2,$3)",
    [player_id, time_started, score]
  );
};

export const getLeaderboardFromDb = async (): Promise<Leaderboard[]> => {
  //* limit should vary
  const result = await query<Leaderboard>(
    "select p.player_name as Player, a.score as Score, to_char(a.time_started, 'Mon/DD/YYYY') as Date, to_char(a.time_started, 'HH24:MI') as Time from attempts a, players p where a.player_id = p.id order by a.score desc limit 20"
  );
  return result.rows;
};
