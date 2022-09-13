/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import React from "react";
import Output from "./Output";
import ClassOneBg from "../Image/classOne.jpg";
import ClassTwoBg from "../Image/classTwo.jpg";
import ClassThreeBg from "../Image/classThree.jpg";
import ClassFourBg from "../Image/classFour.jpg";

const Results = ({ training }) => (
  <div css={styles} className="results">
    {training === "FirstClass" && (
      <Output
        title="First Training Class"
        info="If you could do one thing to improve your health, strength training should be at the top of your list. It involves using one or more muscle groups to perform a specific task, such as lifting a weight or squatting."
        img={ClassOneBg}
      />
    )}

    {training === "SecondClass" && (
      <Output
        title="Second Training Class"
        info="While modern media and advertising may have us think that yoga is all about physical poses, the entirety of yoga includes a wide range of contemplative and self-disciplinary practices, such as meditation, chanting, mantra, prayer, breath work, ritual, and even selfless action."
        img={ClassTwoBg}
      />
    )}
    {training === "ThirdClass" && (
      <Output
        title="Third Training Class"
        info="Bodybuilding has such great and healthy impact on muscle, bones and joints. Bodybuilding keeps your body and muscle strong and flexible. Bodybuilding and weight training can definitely help you with osteoporosis and arthritis."
        img={ClassThreeBg}
      />
    )}

    {training === "FourthClass" && (
      <Output
        title="Fourth Training Class"
        info="This training increases muscle strength by making your muscles work against a weight or force. Different forms of resistance training include using free weights, weight machines, resistance bands and your own body weight."
        img={ClassFourBg}
      />
    )}
  </div>
);

const styles = css`
  width: 100%;
  max-width: 60%;
  .test {
    width: 100%;
    height: 400px;
    background: red;
    &.two {
      background: blue;
    }
  }
  @media (max-width: 900px) {
    max-width: 590px;
    padding: 30px 0 0 0;
  }
  @media (min-width: 901px) and (max-width: 1226px) {
    max-width: 62%;
  }
`;

export default Results;
