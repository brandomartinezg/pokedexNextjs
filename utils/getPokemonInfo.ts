import { pokeApi } from "../api";
import { PokemonRequest } from "../interfaces";

export const getPokemonInfo = async (nameOrId: string) => {

    const {data} = await pokeApi.get<PokemonRequest>(`/pokemon/${nameOrId}`);

    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }
}