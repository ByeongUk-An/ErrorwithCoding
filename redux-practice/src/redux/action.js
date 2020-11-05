export const ADD_TODO = "ADDTODO";
export const REMOVE_TODO = "REMOVETODO";

export const addToDo = (todoState) => {
  return {
    type: ADD_TODO,
    todo: {
      task: todoState,
      id: Math.floor(Math.random() * 10000000000),
    },
  };
};

export const removeToDo = (id) => {
  return {
    type: REMOVE_TODO,
    id,
  };
};
