import styles from "../styles/Button.module.scss";

const Button = ({ text, type }: { text: string; type: string }) => {
  if (type === "submit") {
    return (
      <button className={styles.button} type="submit">
        {text}
      </button>
    );
  } else {
    return (
      <button className={styles.button} type="button">
        {text}
      </button>
    );
  }
};

export default Button;
