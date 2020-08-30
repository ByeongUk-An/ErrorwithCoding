const ADD_TODO = "ADD_TODO";
const COMPLEATE_TODO = "COMPLEATE_TODO";

function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}

function compleate_Todo({ complete, id }) {
  return {
    type: COMPLEATE_TODO,
    complete,
    id,
  };
}

export { ADD_TODO, COMPLEATE_TODO, addTodo, compleate_Todo };
