import { PLUS, MINUS } from "./action";

const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PLUS:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
};

export default reducer;
