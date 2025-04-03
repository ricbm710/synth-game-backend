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
    "SELECT * FROM (SELECT DISTINCT ON (p.id) p.player_name AS Player, a.score AS Score, TO_CHAR(a.time_started, 'Mon DD, YYYY') AS Date, TO_CHAR(a.time_started, 'HH24:MI') AS UTC_Time FROM attempts a JOIN players p ON a.player_id = p.id ORDER BY p.id, a.score DESC, a.time_started DESC) sub ORDER BY Score DESC LIMIT 20"
  );
  return result.rows;
};
