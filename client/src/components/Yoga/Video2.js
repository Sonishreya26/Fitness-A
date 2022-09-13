/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import React from "react";
import VideoBg from "../Image/v1.mp4";

const Video2 = () => (
  <video css={styles} autoPlay muted loop>
    <source src={VideoBg} type="video/mp4" />
  </video>
);

const styles = css`
  min-width: 100%;
  min-height: 90vh;
  max-width: 100%;
  max-height: 90vh;
  object-fit: cover;
  z-index: -1;
`;

export default Video2;