/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import React from "react";
import { useLocation } from "react-router-dom";

const Link = ({ name, linkTo }) => {
  const location = useLocation();
  let homeCondition = location.pathname == "/" && name == "HOME";
  return (
    <a
      css={styles}
      href={linkTo}
      style={{
        color: location.pathname == linkTo || homeCondition ? "#ed563b" : "",
      }}
    >
      {name}
      {}
    </a>
  );
};

const styles = css`
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  font-weight: 400;
  color: #fff;
  transition: color 600ms ease-in-out;
  &:hover {
    color: #ed563b;
  }
  @media (max-width: 1000px) {
    padding: 14px 0;
    width: 100%;
    font-size: 18px;
  }
`;

export default Link;
