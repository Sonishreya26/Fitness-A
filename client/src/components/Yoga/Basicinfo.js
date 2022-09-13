/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import React from "react";


const Basicinfo = ({ title, price, desc, img }) => (
  <div css={styles} className="card">
    <img src={img} alt="Basicinfo" />
    <h5>{title}</h5>
    <h3>{price}</h3>
    <p>{desc}</p>
 
  </div>
);

const styles = css`
  width: 100%;
  max-width: 31%;
  padding: 44px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  text-align: left;
  border-radius: 4px;
  img {
    width: 100%;
  }
  h5 {
    color: #ed563b;
    margin: 26px 0 9px 0;
    font-weight: 500;
    text-align:center;
    font-size: 25px;
  }
  h3 {
    text-align:center;
    color: #232d39;
    letter-spacing: 1px;
  }
  h4 {
    color: #ed563b;
    margin: 26px 0 9px 0;
    font-weight: 500;
    text-align:center;
    background:#ed563b;
    padding: 12px 14px;
    font-size: 20px;
    color: #fff;
  }
  p {
    margin: 24px 0 28px 0;
    color: #7a7a7a;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.7;
  }
  @media (max-width: 830px) {
    max-width: 540px;
    margin: 14px 0;
  }
  @media (min-width: 831px) and (max-width: 1226px) {
    max-width: 47%;
    margin: 14px 0;
  }
`;

export default Basicinfo;
