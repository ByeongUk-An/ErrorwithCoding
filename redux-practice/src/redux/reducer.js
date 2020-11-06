import { ADD_TODO, removeToDo, REMOVE_TODO } from "./action";

const initialState = {
  todolist: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todolist: [...state.todolist, action.todo],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todolist: state.todolist.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
};

export default reducer;
