import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";


const Container = styled.div``;
const ImgItem= styled.div`
  background: ${props => props.bgImg};
  width: 220px;
  height: 330px;
  display:flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 24px;
`;
const Title = styled.p``;
const OpennDay = styled.p``;
const Popularity = styled.p``;

const ImageBox =({id,popularity,imgurl,title,openday})=> (
    <Link to={`/movie/${id}`}>
        <Container>

            <ImgItem bgImg={imgurl ? `url(https://image.tmdb.org/t/p/w220_and_h330_face${imgurl})`: "#777"}>
                {imgurl ? null : "Not Found Image"}
            </ImgItem>
                <Popularity>{popularity} / 10</Popularity>

            <Title>{title}</Title>
            <OpennDay>{openday}</OpennDay>
        </Container>
    </Link>
)

ImageBox.propTypes = {
    id: PropTypes.number.isRequired,
    popularity: PropTypes.number,
    imgurl: PropTypes.string,
    openday: PropTypes.string,
    title: PropTypes.string.isRequired
}

export default ImageBox;