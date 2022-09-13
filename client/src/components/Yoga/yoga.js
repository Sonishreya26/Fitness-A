/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import React from "react";
import YogaVideo from "./YogaVideo";
import Cover from "./Cover";
import Information from "./Information";
import Basicinfo from "./Basicinfo";
import Aasans from "../Aasans/Aasans";
import BasicinfoMain from "./BasicinfoMain";
import FooterMain from "../FooterMain/FooterMain";
import Video2 from "./Video2";

const Yoga = () => (
  <section css={styles} className="main" id="home">
    <Cover />
    <Information />
    <YogaVideo />
    <BasicinfoMain></BasicinfoMain>
    <Video2></Video2>
    <Aasans></Aasans>
  </section>
);
const styles = css`
  width: 100%;
  height: auto;
`;

export default Yoga;
