import React from "react";
import styled from "styled-components";
import images3 from "../img/3.png";
import images4 from "../img/4.png";
import title from "../img/Title.png";
import title1 from "../img/Title1.png";
import title2 from "../img/Title2.png";
import title3 from "../img/Title3.png";
import Brush from "../img/Brush.png";

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
  width: 50%;
  height: 100%;
  background: url(${images4}) no-repeat;
  margin-left: 104px;
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
  background: powderblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Section3Wrap = styled.div`
  width: 1080px;
  height: 1030px;
  background-color: #45493b;
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
          <Section3Wrap></Section3Wrap>
        </Section3>
      </SectionWrap>
    );
  }
}

export default Section;
