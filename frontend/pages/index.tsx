import type { NextPage } from "next";
import styles from "../styles/Home.module.scss"

const Home: NextPage = () => {
  return (
	<div className={styles.home}>
      <div className={styles.title}>
        I am Valentin Lugand Lopez, a junior developer looking for my first opportunities.
      </div>
	</div>
  );
};

export default Home;
