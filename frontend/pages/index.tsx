import type { NextPage } from "next";
import Button from "../components/Button";
import styles from "../styles/Home.module.scss";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.helloworld}>
          {"<"}Hello World_{">"}
        </div>
        <h1 className={styles.h1}>
          I am Valentin Lugand Lopez, a junior developer looking for my first
          opportunities.
        </h1>
        <Button text="Resume" />
      </div>
      <div className={styles.about}>
        <div className={styles.drawing}>
          <Image
            src="/images/cartoon-large.png"
            height={1707}
            width={2000}
            alt="cartoon"
          />
        </div>
        <div className={styles.description}>
			<div className={styles.test}>About</div>
          <h2 className={styles.h2}>What I do</h2>
          <p className={styles.paragraph}>
            I am a junior developper currently living in Paris. During my
            studies at 42, I used a wide range of technologies from low-level
            programming to web development or system admnistration. I consider
            myself as as autodidact and a natural problem solver, which allows
            me to adapt to any new language quickly.
          </p>
          <h2 className={styles.h2}>Background story</h2>
          <p className={styles.paragraph}>
            Like many 42 alumnis, my career path is quite varied. I first
            studied International Business at the University of Rouen, which
            allowed me to spend one year in Granada (Spain) and one year in
            Manchester (UK). I have worked in Sales and Business Development for
            a couple of years until I heard about the renowned 42 Paris. The
            very specific mindstet of the school based on peer-to-peer learning
            and learning by doing really resonated with me. I have always been a
            very disciplined person, always eager to learn and I am an avid
            computer user since I am a kid. When I started to learn coding, it
            did not seem too complicated to me and I really enjoyed myself, so I
            decided to pass the entrance exam in 2019 and succeeded on my first
            attempt. Starting over my studies was a big challenge, but I am
            really glad I made it. Thanks to 42, I had the opportunity to
            participate to several hackathons and I also was lucky to
            participate to the HEC Digital Entrepreur Certificate, which taught
            me a lot and made me use both my business and IT skills.
          </p>
          <h2 className={styles.h2}>My hobbies</h2>
          <p className={styles.paragraph}>
            I am a self-taught musician, and I spend a lot of my free time
            making or listening to music. I mostly play guitar and piano, and I
            recently got into creating electronic music with Logic Pro. Having a
            good physical condition is also something very important for me, so
            I train at the gym 4 times per week all year long.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
