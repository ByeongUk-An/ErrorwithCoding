import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actions.js";
import { todos } from "./state";

export default function reducer(state = todos, action) {
  let newTodos;
  switch (action.type) {
    case ADD_TODO:
      newTodos = [...state];
      return newTodos.concat(action.payload);
    case DELETE_TODO:
      newTodos = [...state];
      return newTodos.filter((todo) => todo.id != action.payload);
    case UPDATE_TODO:
      newTodos = [...state];
      let index = newTodos.findIndex((todo) => todo.id == action.payload.id);
      console.log(index);
      if (index != -1) {
        newTodos[index] = action.payload;
        console.log(newTodos);
        return newTodos;
      }
    default:
      return state;
  }
}
