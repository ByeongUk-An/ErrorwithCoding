import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const NewsContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: #fff;
  margin-bottom: 20px;
  display: flex;

  .imgcontainer {
    width: 400px;
    height: 300px;
  }
  .imgcontainer > img {
    width: 400px;
    height: 300px;
  }
  .paracontainer {
    padding-top: 20px;
    padding-left: 20px;
  }
  .paracontainer > h2 {
    font-size: 30px;
    margin-bottom: 14px;
  }
  .paracontainer > a {
    display: block;
    margin-bottom: 14px;
  }
  .paracontainer > p {
    font-size: 22px;
  }
`;

function Newsitem({ publishedAt, url, urlToImage, title, description }) {
  return (
    <>
      <NewsContainer>
        <div className="imgcontainer">
          <img src={urlToImage} alt={title} />
        </div>
        <div className="paracontainer">
          <h2>{title}</h2>
          <a href={url}>{url}</a>
          <p>{description}</p>
          <p>{publishedAt}</p>
        </div>
      </NewsContainer>
    </>
  );
}

Newsitem.propTypes = {
  publishedAt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Newsitem;
