import React from "react";
import styled from "styled-components";
import images3 from "../img/3.png";
import images4 from "../img/4.png";
import title from "../img/Title.png";
import title1 from "../img/Title1.png";
import title2 from "../img/Title2.png";
import title3 from "../img/Title3.png";
import Brush from "../img/Brush.png";
import plate from "../img/plate.png";
import food1 from "../img/food1.png";
import food2 from "../img/food2.png";
import food3 from "../img/food3.png";
import food4 from "../img/food4.png";
import food5 from "../img/food5.png";
import food6 from "../img/food6.png";
import food1t from "../img/food1t.png";
import food2t from "../img/food2t.png";
import food3t from "../img/food3t.png";
import food4t from "../img/food4t.png";
import food5t from "../img/food5t.png";
import food6t from "../img/food6t.png";
import price from "../img/price.png";

const SectionWrap = styled.div`
  background: #212121;
  width: 100%;
  height: 2460px;
`;
const Section1 = styled.section`
  width: 100%;
  height: 490px;
  display: felx;
  justify-content: space-between;
`;
const Section1_1 = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Section1_1_logo = styled.div`
  width: 240px;
  height: 25px;
  background: url(${title}) no-repeat;
  margin-left: 98px;
  margin-bottom: 43px;
`;
const Section1_1_para = styled.p`
  width: 525px;
  height: 80px;
  font-size: 18px;
  color: #d4d4d4;
  margin-left: 98px;
  letter-spacing: 2;
  line-height: 26px;
`;
const Section1_2 = styled.div`
  width: 44%;
  height: 100%;
  background: url(${images4}) no-repeat;
`;
// Section2
const Section2 = styled.section`
  width: 100%;
  height: 375px;
  background: #45493b;
`;
const Section2_ul = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Section2_li = styled.li`
  width: 315px;
  height: 195px;
`;
const Section2_imgWrap = styled.div`
  height: 34px;
  margin-bottom: 24px;
`;
const Section2_imgTitile = styled.div`
  height: 25px;
  margin-bottom: 24px;
`;
const Sectiion2_p = styled.p`
  font-size: 17px;
  color: #a0a19c;
`;
//Section3 =------------------------
const Section3 = styled.section`
  width: 100%;
  height: 1205px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Section3Wrap = styled.div`
  width: 1080px;
  height: 1035px;
  background-color: #45493b;
`;
const Section3Title = styled.div`
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Section3Title_text = styled.p`
  color: #eaeaea;
  margin-top: 10px;
  font-size: 42px;
  text-transform: uppercase;
`;
const Section3Box = styled.div`
  width: 100%;
  height: 825px;
  display: flex;
  flex-wrap: wrap;
`;
const Section3Boxitem = styled.div`
  width: 25%;
  height: 275px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Section3Boxitem_p = styled.p`
  /* width: 180px; */
  color: #eaeaea;
  font-size: 16.67px;
  line-height: 20px;
  margin-top: 27px;
  margin-bottom: 22px;
`;
class Section extends React.Component {
  render() {
    return (
      <SectionWrap>
        <Section1>
          <Section1_1>
            <Section1_1_logo />
            <Section1_1_para>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est cum
              adipisci dolorum officia magni, impedit harum. Ullam soluta unde
              nostrum. Ullam ipsam quasi optio atque vero fugiat molestiae sed!
            </Section1_1_para>
          </Section1_1>
          <Section1_2 />
        </Section1>
        <Section2>
          <Section2_ul>
            <Section2_li>
              <Section2_imgWrap>
                <img src={Brush} />
              </Section2_imgWrap>
              <Section2_imgTitile>
                <img src={title1} />
              </Section2_imgTitile>
              <Sectiion2_p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                vitae delectus laborum mollitia hic perspiciatis nihil atque ut
                nemo tenetur.
              </Sectiion2_p>
            </Section2_li>
            <Section2_li>
              <Section2_imgWrap>
                <img src={Brush} />
                <img src={Brush} />
              </Section2_imgWrap>
              <Section2_imgTitile>
                <img src={title2} />
              </Section2_imgTitile>
              <Sectiion2_p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cum
                reprehenderit fuga amet fugit pariatur, cupiditate harum quasi
                atque. Facere!
              </Sectiion2_p>
            </Section2_li>
            <Section2_li>
              <Section2_imgWrap>
                <img src={Brush} />
                <img src={Brush} />
                <img src={Brush} />
              </Section2_imgWrap>
              <Section2_imgTitile>
                <img src={title3} />
              </Section2_imgTitile>
              <Sectiion2_p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                suscipit magnam voluptate incidunt, perspiciatis repellat
                necessitatibus cumque asperiores in aspernatur?
              </Sectiion2_p>
            </Section2_li>
          </Section2_ul>
        </Section2>
        <Section3>
          <Section3Wrap>
            <Section3Title>
              <img src={plate} />
              <Section3Title_text>to your plate</Section3Title_text>
            </Section3Title>
            <Section3Box>
              <Section3Boxitem>
                <img src={food1} />
              </Section3Boxitem>
              <Section3Boxitem>
                <img src={food1t} />
                <Section3Boxitem_p>
                  Lorem ipsum dolor
                  <br />
                  sit amet,consectetur
                  <br />
                  adipisicing elit set do
                </Section3Boxitem_p>
                <img src={price} />
              </Section3Boxitem>
              <Section3Boxitem>
                <img src={food2} />
              </Section3Boxitem>
              <Section3Boxitem>
                <img src={food2t} />
                <Section3Boxitem_p>
                  Lorem ipsum dolor
                  <br />
                  sit amet,consectetur
                  <br />
                  adipisicing elit set do
                </Section3Boxitem_p>
                <img src={price} />
              </Section3Boxitem>
              <Section3Boxitem>
                <img src={food3t} />
                <Section3Boxitem_p>
                  Lorem ipsum dolor
                  <br />
                  sit amet,consectetur
                  <br />
                  adipisicing elit set do
                </Section3Boxitem_p>
                <img src={price} />
              </Section3Boxitem>
              <Section3Boxitem>
                <img src={food3} />
              </Section3Boxitem>
              <Section3Boxitem>
                <img src={food4t} />
                <Section3Boxitem_p>
                  Lorem ipsum dolor
                  <br />
                  sit amet,consectetur
                  <br />
                  adipisicing elit set do
                </Section3Boxitem_p>
                <img src={price} />
              </Section3Boxitem>
              <Section3Boxitem>
                <img src={food4} />
              </Section3Boxitem>
              <Section3Boxitem>
                <img src={food5} />
              </Section3Boxitem>
              <Section3Boxitem>
                <img src={food5t} />
                <Section3Boxitem_p>
                  Lorem ipsum dolor
                  <br />
                  sit amet,consectetur
                  <br />
                  adipisicing elit set do
                </Section3Boxitem_p>
                <img src={price} />
              </Section3Boxitem>
              <Section3Boxitem>
                <img src={food6} />
              </Section3Boxitem>
              <Section3Boxitem>
                <img src={food6t} />
                <Section3Boxitem_p>
                  Lorem ipsum dolor
                  <br />
                  sit amet,consectetur
                  <br />
                  adipisicing elit set do
                </Section3Boxitem_p>
                <img src={price} />
              </Section3Boxitem>
            </Section3Box>
          </Section3Wrap>
        </Section3>
      </SectionWrap>
    );
  }
}

export default Section;
