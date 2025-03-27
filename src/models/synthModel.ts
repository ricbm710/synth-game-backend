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
  const result = await query<Synth>(
    "select manufacturer,model,description,image_url,times_selected,times_guessed from synths where id=$1",
    [id]
  );
  return result.rows[0] || null;
};

export const updateSynthTimesFromDb = async (id: number, guessed: boolean) => {
  const queryString = `
    UPDATE synths 
    SET times_selected = times_selected + 1
    ${guessed ? ", times_guessed = times_guessed + 1" : ""}
    WHERE id = $1
  `;
  console.log(queryString);
  await query(queryString, [id]);
};
