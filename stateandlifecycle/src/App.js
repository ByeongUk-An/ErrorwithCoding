import React from 'react';


class App extends React.Component{
  // componentDicomponentDidMountdMount() {
  //   console.log("REqw")
  //   // 컴포넌트가 실행되기전에 실행해라 안쪽에 있는거를
  // 로딩페이지 있는 사이트에 사용 로딩중... 한번에 보여줄 }


  state = {
    count: 0,
  }
  add = () => {
      this.setState((cur) => ({count: this.state.count +1}))
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
      console.log(prevProps, prevState, snapshot);
  } //업데이트 하고싶을
  componentWillUnmount() {
      //컴포넌트가 사라질떄 실행이된다.
  }

    render() {
      const {count} = this.state;
    return (
        <>
        <h1>count:{count}</h1>
        <button onClick={this.add}>+</button>
        <button>-</button>
        </>
    );
  }
}

export default App;
