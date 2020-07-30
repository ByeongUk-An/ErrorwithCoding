import React from "react";

class Enter extends React.Component {
  state = {
    text: "",
  };
  ent = (e) => {
    const { name, value } = e.target;
    const proinput = {
      ...this.state,
      [name]: value,
    };
    if (e.keyCode === 13) {
      this.setState(proinput);
    }
  };

  render() {
    const { text } = this.state;
    return (
      <>
        <input type="text" name="text" onKeyDown={this.ent} />
        <h2>이벤트 : {text}</h2>
      </>
    );
  }
}
export default Enter;
