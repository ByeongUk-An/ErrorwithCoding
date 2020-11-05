import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToDo, removeToDo } from "./redux/action";

const Todolist = () => {
  const todos = useSelector((state) => {
    return state.todolist;
  });
  const dispatch = useDispatch();
  const deletebtn = (curid) => dispatch(removeToDo(curid));
  if (!todos || !todos.length) {
    return <p>todoo없음</p>;
  }
  return (
    <ul>
      {todos.map((item) => {
        // console.log(item.id);
        return (
          <li key={item.id}>
            <span>{item.task}</span>
            <button onClick={() => deletebtn(item.id)}>del</button>
          </li>
        );
      })}
    </ul>
  );
};

const TodoInput = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState([]);
  const handleChange = (event) => setTodo(event.target.value);
  const handleClick = () => {
    dispatch(addToDo(todo));
    setTodo("");
  };
  return (
    <>
      <input type="text" value={todo} onChange={handleChange} />
      <button onClick={handleClick}>추가</button>
    </>
  );
};

// const ListItem = () => {
//   return (

//   )
// }

function App() {
  return (
    <>
      <h1>hello</h1>
      <TodoInput />
      <Todolist />
    </>
  );
}

export default App;
