import React from "react";
import ReactDOM from "react-dom";
import App from "../src/Components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import boardReducer from "./App_reducer";

let store = createStore(boardReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
