/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import Container from "../GlobalComponents/Container";
import scheduleBg from "../Image/bg.jpg";
import Basicinfo from "./Basicinfo";
import y1 from "../Image/y1.png";

const BasicinfoMain = () => (
  <section css={styles} className="membership" id="membershipscards">
    <h2>
      Yoga: <span>How it Works</span>
    </h2>
    <Icon />
    <p className="pMember">
      Yoga is a group of physical, mental, and spiritual practices or
      disciplines. Yoga originated in ancient India. Yoga meaning in Sanskrit
      'Union'. Yoga helps to discipline body and mind. It is an exercise that
      can be done by anyone who wants to do it. The eight limbs of yoga are yama
      (abstinences), niyama (observances), asana (yoga postures), pranayama
      (breath control), pratyahara (withdrawal of the senses), dharana
      (concentration), dhyana (meditation) and samadhi (absorption)."
    </p>
  </section>
);

const styles = css`
  width: 100%;
  padding: 120px 0;
  text-align: center;
  margin-bottom: 10px;

  h2 {
    color: black;
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 1;
    span {
      color: #ed563b;
    }
  }
  .pMember {
    color: black;
  }
  p {
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
    align-items: center;
    padding: 50px 0 0 0;
  }
  @media (max-width: 650px) {
    > p {
      padding: 0 30px;
      br {
        display: none;
      }
    }
  }
  @media (max-width: 830px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 831px) and (max-width: 1226px) {
    .container {
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 780px;
    }
  }
`;

export default BasicinfoMain;
