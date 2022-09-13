/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import Container from "../GlobalComponents/Container";
import scheduleBg from "../Image/scheduleBg.jpg";
import MembershipCardsAll from "./MembershipCardsAll";

const MembershipMain = () => {
  return (
    <section css={styles} className="membership" id="membershipscards">
      <h2>
        MEMBERSHIP <span>PLANS</span>
      </h2>
      <Icon />
      <p className="pMember">
        Get uncountable benefits with our membership plans
        <br />
        Select plans from below list to become a member of our gym
      </p>

      <Container>
        <MembershipCardsAll
          title="Silver"
          price="Price : 25$"
          desc="2 hours of excercises + Free consultaion to coaches + Access to The Community"
          joinnow="Join Now"
        />

        <MembershipCardsAll
          title="Gold"
          price="Price: 45$"
          desc="4 hours of excercises + Free consultaion to coaches + Access to The Community"
          joinnow="Join Now"
        />
        <MembershipCardsAll
          title="Platinum"
          price="Price: 65$"
          desc="6 hours of excercises + Free consultaion to coaches + Access to The Community"
          joinnow="Join Now"
        />
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  padding: 120px 0;
  text-align: center;
  background: url("${scheduleBg}") no-repeat center/cover;
  ${"" /* margin-bottom: 10px; */}
  h2 {
    color: #fff;
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 1;
    span {
      color: #ed563b;
    }
  }
  .pMember {
    color: white;
  }
  p {
    color: #7a7a7a;
    font-size: 16px;
    line-height: 1.7;
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

export default MembershipMain;
