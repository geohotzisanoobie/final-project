import React from "react";
import { useFetchPokemons } from "./hooks/useFetchPokemons";
import { Card } from "../../ui/card/card";

export const Pokemons = () => {
  const { data, isFetching, error } = useFetchPokemons();

  const loaderJsx = isFetching && <h1>Loading...</h1>;
  const errorJsx = error && <h1>Server error</h1>;
  const pokemonsJsx = data && data.length && !isFetching && (
    <ul className="pokemons">
      {data.map(({ name, image }: any) => (
        <li key={name} className="pokemons__item">
          <Card src={image} name={name} />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="container">
      {loaderJsx}
      {errorJsx}
      {pokemonsJsx}
    </div>
  );
};
