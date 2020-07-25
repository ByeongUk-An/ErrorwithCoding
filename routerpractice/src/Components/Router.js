import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import Login from "../Routes/Login";
import Sub from "../Routes/Sub";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/sub" exact component={Sub} />
      <Route path="/sub/detail" render={() => <h1>fuckfuck</h1>} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);
