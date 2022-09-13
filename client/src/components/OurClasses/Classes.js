/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import React, { useState } from "react";
import Icon from "../GlobalComponents/Icon";
import LinksContainer from "./LinksContainer";
import Results from "./Results";
import Container from "../GlobalComponents/Container";

const Classes = ({ text }) => {
  const [training, setTraining] = useState("FirstClass");

  return (
    <section css={styles} className="ourClasses" id="ourClasses">
      <h2>
        OUR <span>CLASSES</span>
      </h2>
      <Icon />
      <h3>
      When it comes to enhancing your fitness and health, group exercise can go a long way in contributing to your journey. As experts in the world of fitness ourselves, we see and experience the many benefits of group exercise within our health club.
        <br />
        So, we have below classes:- Fitness Class, Muscle Training, Body Building, Yoga Training Class, Advanced Training.
      </h3>
      <Container>
        <LinksContainer setTraining={setTraining} training={training} />
        <Results training={training} />
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  padding: 100px 0;
  text-align: center;
  h2 {
    color: #232d39;
    font-size: 26px;
    font-weight: 900;
    line-height: 1;
    span {
      color: #ed563b;
    }
  }
  h3 {
    margin-left: 150px;
    margin-right: 150px;
    color: #7a7a7a;
    font-size: 15px;
    line-height: 1.7;
    text-align: center;
  }
  .container {
    display: flex;
    justify-content: space-between;
    padding: 80px 0 0 0;
  }
  @media (max-width: 900px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (max-width: 580px) {
    p {
      padding: 0 20px;
      br {
        display: none;
      }
    }
  }
  @media (min-width: 901px) and (max-width: 1226px) {
    .container {
      justify-content: space-between;
      max-width: 90%;
    }
  }
`;

export default Classes;
