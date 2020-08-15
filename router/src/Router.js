import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from "./Routes/Header";
import Login from "./Routes/Login";

//라우터
export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Header} />
      <Route path="/oginl" component={Login} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);
