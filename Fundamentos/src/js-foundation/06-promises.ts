import { httpClientPlugin } from "../plugins";

export const getPokemonById = async (
  id: string | number
): Promise<string | undefined> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  try {
    const pokemon = await httpClientPlugin.get(url);
    return pokemon.name;
  } catch (error) {
    throw `pokemon not found with id ${id}`;
  }
};
