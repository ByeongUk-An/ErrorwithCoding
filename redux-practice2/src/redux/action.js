export const ADD_TODO = "ADDTODO";
export const REMOVE_TODO = "REMOVETODO";

export const addToDo = (todostate) => {
  return {
    type: ADD_TODO,
    todo: {
      task: todostate,
      id: Math.floor(Math.random() * 10000000),
    },
  };
};

export const removeToDo = (id) => {
  return {
    type: REMOVE_TODO,
    id,
  };
};
