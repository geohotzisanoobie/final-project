import { pokemonsTypes, IPokemon } from "./types";
import { api } from "../../api";
import { getOrderStr } from "../../utils";

export const pokemonsActions = {
  startFetching() {
    return {
      type: pokemonsTypes.POKEMONS_START_FETCHING,
    };
  },
  stopFetching() {
    return {
      type: pokemonsTypes.POKEMONS_STOP_FETCHING,
    };
  },
  fill(payload: IPokemon[]) {
    return {
      type: pokemonsTypes.POKEMONS_FILL,
      payload,
    };
  },
  fetchingError(error: { status: number }) {
    return {
      type: pokemonsTypes.POKEMONS_FETCHING_ERROR,
      error: true,
      payload: error,
    };
  },

  fetchAsync: () => async (dispatch: any) => {
    dispatch(pokemonsActions.startFetching());

    const response = await api.pokemons.fetch(20, 0);

    if (response.status === 200) {
      const { results } = await response.json();

      const pokemons = results.map((pokemon: IPokemon, i: number) => ({
        ...pokemon,
        image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getOrderStr(
          i + 1
        )}.png`,
      }));

      dispatch(pokemonsActions.fill(pokemons));
    } else {
      const error = {
        status: response.status,
      };

      dispatch(pokemonsActions.fetchingError(error));
    }
    dispatch(pokemonsActions.stopFetching());
  },
} as const;
