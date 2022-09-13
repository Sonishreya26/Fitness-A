/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import React from "react";

const Cover = () => <div css={styles} className="Cover"></div>;

const styles = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: -1.5em;
  left: 0;
  background: rgba(10, 45, 57, 0.7);
  @media only screen and (max-width: 1000px) {
    bottom: -0.5em;
  }
`;

export default Cover;
