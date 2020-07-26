import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from "../Routes/Header";
import Login from "../Routes/Login";
export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Header} />
      <Route path="/Login" component={Login} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);
