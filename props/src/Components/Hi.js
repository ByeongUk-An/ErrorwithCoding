import React from "react";

function Hi(props) {
  const { author, name, color } = props;
  return (
    <>
      <p>
        {author}! {name} 내가 좋아하는 색깔은 {color}
      </p>
    </>
  );
}

export default Hi;
