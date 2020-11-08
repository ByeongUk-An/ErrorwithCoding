import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToDo, removeToDo } from "./redux/action";

const Todolist = () => {
  const todos = useSelector((state) => {
    return state.todolist;
  });
  console.log(todos);
  const dispatch = useDispatch();
  const deletebtn = (curid) => dispatch(removeToDo(curid));
  if (!todos || !todos.length) {
    return <p>todo없음</p>;
  }
  return (
    <ul>
      {todos.map((item) => {
        return (
          <li key={item.id}>
            <span>{item.task}</span>
            <button onClick={() => deletebtn(item.id)}>삭제</button>
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
  };

  return (
    <>
      <input type="text" value={todo} onChange={handleChange} />
      <button onClick={handleClick}>추가</button>
    </>
  );
};

function App() {
  return (
    <>
      <h2>hello</h2>
      <TodoInput />
      <Todolist />
    </>
  );
}

export default App;
