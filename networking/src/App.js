import React from 'react';
import Movie from "./Movie";
import axios from 'axios';
const key = "f3341ae37fe392613293736e7f266ef5";


class App extends React.Component {

  state = {};

  _callMovie = () => { // 영화 데이터베이스에 데이터 요청을 보낸 후 받아온다.
    return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=ko-KR&page=4`);
  }

  _getMovie = async () => { // 받아온 데이터를 객체분해로 가공한 뒤에 state에 저장한다.
    const {data: {results: movie}} = await this._callMovie();
    this.setState({
      movie
    })
  }

  componentDidMount() { // 컴포넌트가 마운트 되기전에 함수를 실행하여 위의 기능들을 수행한다.
    this._getMovie();  //디드마운트로
  }
arr = [{title:"title"}, {}]
  renderingItem = () => { // 배열로 저장된 영화 데이터를 화면에 사용할 수 있게 가공한다.
    const movies = this.state.movie.map((item, index) => {
      return (
          <Movie title={item.original_title} src={item.poster_path} key={index} />
      )
    });
    return movies
  }

  render() {
    const {movie} = this.state;
    return (
        <>
          <div>
            {movie ? this.renderingItem() : "데이터가 없습니다..."}
          </div>

        </>
    );
  }
}

export default App;
