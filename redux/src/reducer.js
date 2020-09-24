import { combineReducers } from "redux";
import {
  ADD_TODO,
  COMPLETE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
} from "./action";

const { SHOW_ALL } = VisibilityFilters;

//state가 없으면 SHOW_ALL이 들어간다 디폴트값으로
function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todo(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          id: action.id,
          complete: false,
        },
      ];

    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          complete: true,
        }),
        ...state.slice(action.index + 1),
      ];
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todo,
});
export default todoApp;
