/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import React from "react";
import Button from "../GlobalComponents/Button";

const Information = () => (
  <div css={styles} className="info">
    <span></span>
    <h1>
    <span>Online Yoga Teacher Training</span>
    </h1>
    
    <Button text="JOIN US" />
  </div>  
);

const styles = css`
  width: 100%;
  max-width: 900px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
  color: #fff;
  p {
    font-size: 17px;
    line-height: 1;
    font-weight: 900;
    letter-spacing: 1.2px;
  }
  h1 {
    font-size: 90px;
    line-height: 1;
    font-weight: 900;
    margin: 36px 0;
    span {
      color: #FFFFFF;
    }
  }
  .btn {
    padding: 14px 16px;
  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 42px;
    }
  }
`;

export default Information;