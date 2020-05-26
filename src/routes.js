import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/produtos" component={Products} />
    </Switch>
  );
}
