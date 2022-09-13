/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import AasansCard from "./AasansCard";
import Container from "../GlobalComponents/Container";
import s1 from "../Image/s1.jpg";
import s2 from "../Image/s2.jpg";
import s3 from "../Image/s3.jpg";
import s4 from "../Image/s4.jpg";
import s5 from "../Image/s5.jpg";
import s6 from "../Image/s6.jpg";
import s7 from "../Image/s7.jpg";
import s8 from "../Image/s8.jpg";
import s9 from "../Image/s9.jpg";

const Aasans = () => {
  const linkObj = [
    "https://www.youtube.com/watch?v=1ElcyxQCZ4w",
    "https://www.youtube.com/watch?v=1ElcyxQCZ4w",
    "https://www.youtube.com/watch?v=XeXz8fIZDCE",
    "https://www.youtube.com/watch?v=XeXz8fIZDCE",
    "https://www.youtube.com/watch?v=kuSZEZ0fCY0",
    "https://www.youtube.com/watch?v=XeXz8fIZDCE",
    "https://www.youtube.com/watch?v=XeXz8fIZDCE",
    "https://www.youtube.com/watch?v=XeXz8fIZDCE",
    "https://www.youtube.com/watch?v=XeXz8fIZDCE",
    "https://www.youtube.com/watch?v=XeXz8fIZDCE",
  ];
  return (
    <section css={styles} className="Aasans" id="Aasans">
      <h2>
        Different Types Of <span>YOGAS</span>
      </h2>
      <Icon />
      <p>
        When you’re trying to determine which of the different types of yoga is
        best for you, remember that there is no right or wrong one— just one
        that might not be right for you at this moment. <br />
        “Like any form of exercise, choose something you want to do,” says
        Stephanie Saunders, executive director of fitness at Beachbody and a
        certified yoga instructor. “Bikram or Iyengar might appeal to you if you
        are a very detailed person. If you are more of a free spirit, vinyasa or
        aerial yoga might be fun. Find a class that makes you excited to go.”
        <br />
        So which one will get you excited? Our guide to the common types of yoga
        can help you decide whether you’re in more of a restorative yoga or a
        power yoga kind of mood, or anything in between.
      </p>
      <Container>
        <AasansCard
          title="Yoga 1"
          name="Hatha"
          desc="'Hatha is traditionally about creating balance in the autonomic nervous system by following strengthening poses with poses that are relaxing and improve flexibility,' explains Dr Nitasha Buldeo, yoga instructor and founder of Organic Apoteke and I-Yogaa. 'Breath also plays an important part in the practice of Hatha Yoga. Together, breath and movement create balance in body and mind."
          img={s1}
          link={linkObj[1]}
        />
        <AasansCard
          title="Yoga 2"
          name="Vinyasa"
          desc="Based out of New York, Jennifer Selter is a fitness, nutrition, and lifestyle influencer with 12 million followers on Instagram. She started her fitness journey back in high school, working as a front desk clerk at a local gym.
        With a need to keep herself motivated, she started an Instagram account to foster and build a supportive community of like-minded individuals, which in turn made her one of the top fitness influencers on the platform."
          img={s2}
          link={linkObj[2]}
        />
        <AasansCard
          title="Yoga 3"
          name="Ashtanga"
          desc="'Ashtanga synchronises breath, postures and Drishti (meaning: gaze point) to create a dynamic, flowing practice that builds internal heat,' explains Jonathan Sattin, founder of triyoga. 'The main difference is that the sequence is the same every time, no matter if you are practising Ashtanga in a class led by the teacher, or in a traditional self-practice setting where the teacher is there to silently guide you."
          img={s3}
          link={linkObj[3]}
        />
      </Container>
      <Container>
        <AasansCard
          title="Yoga 4"
          name="Iyengar"
          desc="Before the word became synonymous with a specific strand, Iyengar referred to a person. B.K.S Iyengar was an influential teacher, famed for the introduction of multiple props, such as blocks and chairs. (It should be noted that certain former students have alleged physical abuse from the teacher, who openly kicked and slapped practitioners during some classes.)The use of these props is designed to help you achieve proper technique and positioning, with an eventual goal to build enough strength in your body to get into the right position without them."
          img={s4}
          link={linkObj[4]}
        />
        <AasansCard
          title="Yoga 5"
          name="Yin"
          desc="Yin involves postures and stretches that deeply lengthen muscles and fascia (connective tissue) encasing joints and all muscles, thereby helping to improve joint mobility and overall flexibility,' says teacher, Caroline Lucas. 'You would typically hold these poses between two and 10 minutes each, allowing ample time for deep-seated patterns of tension in the body to begin to release."
          img={s5}
          link={linkObj[5]}
        />
        <AasansCard
          title="Yoga 6"
          name="Restorative"
          desc="'Restorative yoga is a therapeutic style of yoga that uses props to support the body, encouraging deep relaxation,' continues Lucas. 'Using passive yoga asanas (poses), we let our nervous systems shift and relax. This helps us to relieve the effects of negative stress encountered in daily life and can be highly beneficial in times of fatigue, illness, and emotional strain'"
          img={s6}
          link={linkObj[6]}
        />
      </Container>
      <Container>
        <AasansCard
          title="Yoga 7"
          name="Kundalini"
          desc="If you've ever seen people emerging from a studio dressed entirely in white, they might have just finished a Kundalini class.Kundalini yoga combines invigorating movement, with dynamic breath work, meditation and the chanting of mantras to build vitality. During a class you’ll practise “kriyas”, such as strong repetitive arm movements, breathwork and hand gestures to help build mental endurance and fortify the nervous system,' explains triyoga's Sattin."
          img={s7}
          link={linkObj[7]}
        />
        <AasansCard
          title="Yoga 8"
          name="Power"
          desc="Power yoga is a broad term used to describe a dynamic practice, often incorporating arm balances and inversions, and sure to make you sweat. Power is almost always a vinyasa (flowing) style of class, with flowing movements to get your heart rate up and build strength,' says Williams.asically, it's harder, faster and stronger than traditional Ashtanga, designed to make you sweat and build your strength."
          img={s8}
          link={linkObj[8]}
        />
        <AasansCard
          title="Yoga 9"
          name="Rocket"
          desc="Another westernised style, Rocket is characterised by following a similar pattern in each class with a variety of postures.The sequence is mostly the same each time. It begins with sun salutations before moving on to standing and seated postures, then inversions and arm balances. Variations and modifications will be offered throughout, and you’ll be encouraged to playfully grow at a pace that’s right for you,' explains Sattin. 'There is a strong focus on breath, bandha (energy lock) and Drishti (gaze point) as tools for meditation."
          img={s9}
          link={linkObj[9]}
        />
      </Container>
    </section>
  );
};

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
    margin-left: 150px;
    margin-right: 150px;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0 0 0;
  }
  a {
    color: #fff;
    font-weight: 500;
    width: absolute;
    text-align: center;
    background: #ed563b;
    padding: 5px;
    width: 100px;
    display: inline;
    font-size: 20px;
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

export default Aasans;
