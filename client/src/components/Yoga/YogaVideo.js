/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import React from "react";
import VideoBg from "../Image/yoga.mp4";

const YogaVideo = () => (
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

export default YogaVideo;