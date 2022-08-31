import styles from "../styles/About.module.scss";
import Image from "next/image";

const About = () => {
	return (
		<section className={styles.about}>
        <div className={styles.container}>
          <Image
            src="/images/cartoon-xl.png"
            alt="cartoon"
			layout="fill"
			className={styles.image}
          />
        </div>
        <div className={styles.description}>
          <h2 className={styles.h2}>About</h2>
          <p className={styles.paragraph}>
            I am a passionate junior developper with a background in
            business and I currently live in Paris. I consider myself as an
            autodidact and a natural problem solver, which allows me to adapt to
            any new technology quickly.<br/><br/> I first studied international business
            and worked in Sales / Business Development before taking the
            decision to pivot and study programming.<br/>At 42, I used a wide range
            of technologies from low-level programming to web development or
            system admnistration. I also participated to a few hackathons and
            enrolled in the HEC Digital Entrepreneur Certificate, which taught me
            a lot and made me combine both my business and IT skills.<br/><br/> I spend a
            lot of my free time making or listening to music. I mostly play
            guitar and piano, and I recently got into creating electronic music
            with Logic Pro. Having a good physical condition is also something
            very important for me, so I train at the gym 4 times per week all
            year long.
          </p>
        </div>
      </section>
	)
}

export default About;