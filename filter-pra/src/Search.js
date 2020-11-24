import React, { useState } from "react";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";

function Search() {
  const select = useSelector((state) => state);

  const allClick = () => {};

  return (
    <>
      <button onClick={}>All</button>
      <button onClick={}>SRPG</button>
      <button onClick={}>RPG</button>
      <button onClick={}>레이싱</button>
      <button onClick={}>아케이드</button>

      <ul>
        {select.map((item) => {
          return <Item item={item} />;
        })}
      </ul>
    </>
  );
}

export default Search;
