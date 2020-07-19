import React from "react";
import styled from "styled-components";

const Wrap = styled.section`
  width: 100%;
  height: auto;
`;
const MainBn = styled.div`
  width: 100%;
  height: 500px;

  display: flex;
`;
const MainBnItem = styled.div`
  width: 50%;
  height: 100%;
  &:first-child {
    background: url("https://lh3.googleusercontent.com/-qH3OfUllyh4/Vd6-8LUyXvI/AAAAAAAAGJY/ju75kZoQg7U/s800-Ic42/city-cityscape-amarpreet-kaur.jpg");
  }
  &:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const BnTitle = styled.h2`
  font-size: 40px;
  color: #000;
  font-weight: bold;
  margin-bottom: 30px;
`;
const Bnpara = styled.p`
  font-size: 24px;
  color: #777;
  text-align: center;
  line-height: 1.5;
`;
const GridBox = styled.div`
  width: 100%;
  height: 1200px;
  background: yellowgreen;
  display: flex;
  flex-wrap: wrap;
`;

const GridItem = styled.div`
  width: 33.3%;
  height: 400px;
  background: #020202;
  transition: 300ms ease-in;
  &:nth-child(even) {
    background: steelblue;
  }
  &:nth-child(3n) {
    width: 33.4%;
  }

  div {
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: 0.3s ease-in;
    background: rgba(0, 0, 0, 0.7);
  }
  &:nth-child(even):hover {
    background-color: tomato;
    div {
      opacity: 1;
    }
  }
`;

class Section extends React.Component {
  render() {
    return (
      <Wrap>
        <MainBn>
          <MainBnItem></MainBnItem>
          <MainBnItem>
            <BnTitle>DigiTal. Mordern. Creative</BnTitle>
            <Bnpara>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo
              id similique reiciendis ullam repudiandae a saepe aspernatur sit
              fugiat obcaecati amet quisquam, nulla eligendi voluptatem ipsam
              aperiam aut sint?
            </Bnpara>
          </MainBnItem>
        </MainBn>
        <GridBox>
          <GridItem />
          <GridItem>
            <div></div>
          </GridItem>
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
        </GridBox>
      </Wrap>
    );
  }
}

export default Section;
