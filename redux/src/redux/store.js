import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";

export let store = createStore(reducer, composeWithDevTools());
