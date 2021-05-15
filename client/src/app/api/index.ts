import { root } from "./config";

export const api = {
  pokemons: {
    fetch(limit: number, offset: number) {
      return fetch(`${root}/pokemon?limit=${limit}&offset=${offset}`);
    },
  },
} as const;
