/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Link from "../Navbar/Link";

const FooterMain = () => {
  const navigate = useNavigate();
  return (
    <section css={styles}>
      <footer className="footer-distributed">
        <div className="footer-right">
          <h4 css={styles}>
            FITNESS<span> A</span>
          </h4>
        </div>

        <div className="footer-left">
          <p className="footer-links">
            <a href="/">Home</a>

            <a
              className="point"
              onClick={() => {
                navigate("/#trainers", { state: { hash: "#trainers" } });
              }}
            >
              Trainers
            </a>

            <a href="/classes">Classes</a>

            <a href="/schedules">Schedules</a>

            <a href="/contact">Contact</a>

            <a href="/bmi">BMI</a>

            <a href="/membership">Membership</a>
          </p>

          <p>Copyright Fitness &copy; 2022</p>
        </div>
      </footer>
    </section>
  );
};

const styles = css`
  width: 100%;
  text-align: center;
  background: black;
  margin-bottom: 0px;
  padding: 1.5em;
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
  h4 {
    color: #fff;
    font-size: 20px;
    font-weight: 900;
    line-height: 0;
    cursor: pointer;
  }
  .pMember {
    color: white;
  }
  span {
    color: #ed563b;
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

  .footer-distributed {
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    width: 100%;
    text-align: left;
    font: normal 16px sans-serif;
    padding: 45px 50px;
  }

  .footer-distributed .footer-left p {
    color: #ffffff;
    font-size: 16px;
    margin: 0;
    margin-left: 10px;
  }

  /* Footer links */

  .footer-distributed p.footer-links {
    font-size: 20px;
    font-weight: bold;
    margin: 0 0 10px;
    padding: 0;
    transition: ease 0.25s;
  }

  .footer-distributed p.footer-links a {
    display: inline-block;
    line-height: 1.8;
    text-decoration: none;
    color: inherit;
    transition: ease 0.25s;
  }

  .footer-distributed .footer-links a:before {
    content: "·";
    font-size: 20px;
    left: 0;
    color: #fff;
    display: inline-block;
    padding-right: 5px;
  }

  .footer-distributed .footer-links .link-1:before {
    content: none;
  }

  .footer-distributed .footer-right {
    float: right;
    margin-top: 6px;
    max-width: 180px;
  }

  .footer-distributed .footer-right a {
    display: inline-block;
    width: 35px;
    height: 35px;
    background-color: #33383b;
    border-radius: 2px;
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    line-height: 35px;
    margin-left: 3px;
    transition: all 0.25s;
  }

  .footer-distributed .footer-right a:hover {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
  }

  .footer-distributed p.footer-links a:hover {
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    .footer-distributed .footer-left,
    .footer-distributed .footer-right {
      text-align: center;
    }
    .footer-distributed .footer-right {
      float: none;
      margin: 0 auto 20px;
    }
    .footer-distributed .footer-left p.footer-links {
      line-height: 1.8;
    }
  }
`;
export default FooterMain;
