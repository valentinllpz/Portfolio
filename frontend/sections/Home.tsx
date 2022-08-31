import Button from "../components/Button";
import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.helloworld}>
        {"<"}
        <div className={styles.typewriter}>Hello World</div>
        {">"}
      </div>
      <h1 className={styles.h1}>
        I am Valentin Lugand Lopez, a{" "}
        <span className={styles.highlight}>junior developer</span> looking for
        my first opportunities.
      </h1>
      <Button text="Resume" />
    </section>
  );
};

export default Home;
