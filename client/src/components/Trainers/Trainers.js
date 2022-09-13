/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import TrainerCard from "./TrainerCard";
import Container from "../GlobalComponents/Container";
import fit1 from "../Image/fit1.jpg";
import fit2 from "../Image/fit2.jpg";
import fit3 from "../Image/fit3.jpg";
import fit4 from "../Image/fit4.jpg";
import fit5 from "../Image/fit5.jpg";
import fit6 from "../Image/fit6.jpg";

const Trainers = () => (
  <section css={styles} className="trainers" id="trainers">
    <h2>
      EXPERT <span>TRAINERS</span>
    </h2>
    <Icon />
    <p>
      We're sure that one time or another, you've been fascinated at how a
      trainer facilitates class and engages learners. Youâ€™ve also most likely
      observed <br />
      some of the best qualities of a good trainer and already somewhat have an
      idea of what attributes make a trainer great at their work.
    </p>
    <Container>
      <TrainerCard
        title="Strength Trainer"
        name="Michelle Lewin"
        desc="Michelle became one of the top Instagram fitness models by motivating her followers through posting short videos on Instagram. She’s gone on to start her own line of supplements and a wide range of home workout equipment since becoming a fitness influencer as well."
        img={fit1}
      />
      <TrainerCard
        title="Muscle Trainer"
        name="Jennifer Selter"
        desc="Based out of New York, Jennifer Selter is a fitness, nutrition, and lifestyle influencer with 12 million followers on Instagram. She started her fitness journey back in high school, working as a front desk clerk at a local gym.
        With a need to keep herself motivated, she started an Instagram account to foster and build a supportive community of like-minded individuals, which in turn made her one of the top fitness influencers on the platform."
        img={fit2}
      />
      <TrainerCard
        title="Power Trainer"
        name="Kayla Itsines"
        desc="Kayla has established herself as one of the top Instagram fitness models by posting short exercise videos on YouTube daily. Her brand has developed an active community of 10 million women who trust her workout regimen and recipe guides.With her amazingly flexible programs"
        img={fit3}
      />
    </Container>
    <Container>
      <TrainerCard
        title="Strength Trainer"
        name="Lauren Drain"
        desc="she shares her secrets with the world, offering various workout and nutrition guides. She often talks about the blood, sweat, and tears that she put in to achieve the great shape she is in today. Lauren makes it a point to use her status as one of the top fitness influencers to always inspire her followers with her own story of how, if you set your mind to something, nothing is impossible.."
        img={fit4}
      />
      <TrainerCard
        title="Muscle Trainer"
        name="Simeon Panda"
        desc="Simeon uses his status as a fitness influencer to spread incredibly positive and motivational messages. Due to this, he’s inspired thousands of people with his online workout programs. Additionally, he has his fitness accessories and sportswear line. He’s earned a name for himself in the fitness industry because of his character and high standards."
        img={fit5}
      />
      <TrainerCard
        title="Power Trainer"
        name="Massy Arias"
        desc="Massiel Indhira Arias is a bilingual fitness trainer in Los Angeles who has grown to have one of the top fitness Instagram accounts. you’ll find it filled with short gym videos and before after snaps of her followers. The doting mother doesn’t shy away from posting photos. Massiel has leveraged the idea of being relatable with her followers in order to become one of the top fitness influencers."
        img={fit6}
      />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 120px 0;
  text-align: center;
  h2 {
    color: #232d39;
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 1;
    span {
      color: #ed563b;
    }
  }
  > p {
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
`;

export default Trainers;
