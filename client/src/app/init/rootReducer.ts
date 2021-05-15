import { combineReducers } from "redux";
//Reducers
import { pokemonsReducer as pokemons } from "../bus/pokemons/reducer";
export const rootReducer = combineReducers({
  pokemons,
});
