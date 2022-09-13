/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import Info from "./Info";

const AboutUs = () => (
  <section css={styles} className="main" id="home">
    <Info />
  </section>
);

const styles = css`
  width: 100%;
  height: auto;
`;

export default AboutUs;
