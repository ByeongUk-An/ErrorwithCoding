import { useDispatch, useSelector } from "react-redux";
import { countminus, countplus } from "./reducer/action";

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state, []);
  console.log(selector);

  const plusbtn = () => {
    return dispatch(countplus());
  };
  const minusbtn = () => {
    return dispatch(countminus());
  };
  return (
    <>
      <h1>Counter:{selector}</h1>
      <button onClick={plusbtn}>Plus</button>
      <button onClick={minusbtn}>Minus</button>
    </>
  );
}

export default App;
