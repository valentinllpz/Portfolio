import Button from "../components/Button";
import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.helloworld}>
        {"<"}Hello World_{">"}
      </div>
      <h1 className={styles.h1}>
        I am Valentin Lugand Lopez, a{" "}
        <span className="highlight">junior developer</span> looking for my first
        opportunities.
      </h1>
      <Button text="Resume" />
    </section>
  );
};

export default Home;
