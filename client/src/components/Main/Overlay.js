/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import React from "react";

const Overlay = () => <div css={styles} className="overlay"></div>;

const styles = css`
  position: absolute;
  top: 0;
  right: 0;
  ${"" /* bottom: -4.5em; */}
  bottom: -5.3em;
  left: 0;
  background: rgba(35, 45, 57, 0.8);
  @media only screen and (max-width: 768px) {
    bottom: -4.4em;
  }
`;

export default Overlay;
