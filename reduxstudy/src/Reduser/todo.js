import todoAction from "../Action/index";
const { ADD_TODO, COMPLEATE_TODO } = todoAction.todo;

const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: Math.floor(Math.random() * 100) + 1,
        todo: action.text,
        complete: false,
      };
    case COMPLEATE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        complete: !state.complete,
      };
    default:
      return state;
  }
};
