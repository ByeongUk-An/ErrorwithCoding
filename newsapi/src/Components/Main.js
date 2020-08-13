import React, { useState } from "react";
import axios from "axios";

function Main() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        "http://newsapi.org/v2/top-headlines?country=kr&category=technology&apiKey=19daa0c916a04f24ad1180b7fe3639af"
      );
      setData(response.data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <button onClick={onClick}>클릭</button>
      {data && <textarea value={JSON.stringify(data, null, 2)}></textarea>}
      {console.log(data)}
    </>
  );
}

export default Main;
