import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pokemonsActions } from "../actions";

export const useFetchPokemons = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pokemonsActions.fetchAsync());
  }, [dispatch]);

  const { data, isFetching, error } = useSelector(
    (state: any) => state.pokemons
  );

  console.log({ data, isFetching, error });

  return {
    data,
    isFetching,
    error,
  };
};
