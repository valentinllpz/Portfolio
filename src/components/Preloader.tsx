import styles from "../styles/Preloader.module.scss";

const Preloader = () => {
  return (
        <div id={styles.preloaderBg}>
          <div id={styles.preloader}>
            <span></span>
            <span></span>
          </div>
        </div>
  );
};

export default Preloader;
