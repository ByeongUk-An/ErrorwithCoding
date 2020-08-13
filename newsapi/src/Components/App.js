import React from "react";
import axios from "axios";
import Newsitem from "./Newsitem";
import Globalstyles from "../Styles/Globalstyles";

class App extends React.Component {
  state = {
    isLoading: true,
    articles: [],
  };

  getMovie = async () => {
    const {
      data: { articles },
    } = await axios.get(
      "http://newsapi.org/v2/top-headlines?country=kr&category=technology&apiKey=19daa0c916a04f24ad1180b7fe3639af"
    );

    this.setState({
      articles,
      isLoading: false,
    });
  };

  componentDidMount() {
    this.getMovie();
  }
  render() {
    const { isLoading, articles } = this.state;
    return (
      <>
        {isLoading
          ? "Loading..."
          : articles.map((article) => {
              return (
                <Newsitem
                  key={article.publishedAt}
                  publishedAt={article.publishedAt}
                  url={article.url}
                  urlToImage={article.urlToImage}
                  title={article.title}
                  description={article.description}
                />
              );
            })}
        <Globalstyles />
      </>
    );
  }
}

export default App;
