export const ADD_TODO = "ADDTODO";
export const REMOVE_TODO = "REMOVETODO";

export const addToDo = (todostate) => {
  return {
    type: ADD_TODO,
    todo: {
      task: todoState,
      id: Math.floor(Math.random()*100000000),
    },
  };
};
