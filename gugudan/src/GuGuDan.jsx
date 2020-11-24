import React from "react";

class GuGuDan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
      value: "",
      result: "",
    };
    this.focusinput = React.createRef();
  }
  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (parseInt(this.state.value) === this.state.first * this.state.second) {
      this.setState({
        result: "정답:" + this.state.value,
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value: "",
      });
      console.log(this.focusinput.current.value);
    } else {
      this.setState({
        result: "땡",
        value: "",
      });
    }
  };

  render() {
    console.log("랜더링");
    return (
      <>
        <p>
          {this.state.first} 곱하기 {this.state.second} 는 뭘까요?
        </p>
        <form onSubmit={this.onSubmit}>
          <input
            type="number"
            value={this.state.value}
            onChange={this.onChange}
            ref={this.focusinput}
          />
          <button>입력</button>
        </form>
        <p>{this.state.result}</p>
      </>
    );
  }
}

export default GuGuDan;
