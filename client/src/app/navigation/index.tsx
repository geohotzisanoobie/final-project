import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { books } from "./books";

import { Home } from "../pages/home";
import { Pokemons } from "../pages/pokemons";
import { ErrorPage } from "../pages/404";

export const Routes = () => (
  <Router>
    <Switch>
      <Route exact path={books.home}>
        <Home />
      </Route>
      <Route path={books.pokemons}>
        <Pokemons />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  </Router>
);
