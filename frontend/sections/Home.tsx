import Button from "../components/Button";
import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <section className={styles.home} id="Home">
      <div className={styles.helloworld}>
        {"<"}
        <div className={styles.typewriter}>Hello World</div>
        <div className={styles.cursor} />
        {">"}
      </div>
      <h1>
        I am Valentin Lugand Lopez, a <span>junior developer</span> looking for
        my first opportunities.
      </h1>
      <a className={styles.buttonLink} href="" target="_blank">
        <Button text="Resume" type="button" />
      </a>
    </section>
  );
};

export default Home;
