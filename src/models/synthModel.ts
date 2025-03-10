//db config
import { query } from "../db";
//types
import { Synth } from "../types/Synth";

export const getAllSynthsFromDb = async (): Promise<Synth[]> => {
  const result = await query<Synth>(
    "select id,manufacturer,model,description,image_url,times_selected,times_guessed from synths"
  );
  return result.rows;
};

export const getSynthByIdFromDb = async (id: Number): Promise<Synth | null> => {
  console.log(id);
  console.log(typeof id);
  const result = await query<Synth>(
    "select manufacturer,model,description,image_url,times_selected,times_guessed from synths where id=$1",
    [id]
  );
  return result.rows[0] || null;
};
