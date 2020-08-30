import { useEffect } from "react";

function add(state) {
  const [count, setCount] = useState(null);
  count = state;
  setCount((cur) => cur + 1);
}

export default add;
