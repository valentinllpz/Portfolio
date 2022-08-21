import styles from "../styles/BurgerButton.module.scss";
import { useThemeContext } from "../context/themeContext";

const BurgerButton = ({
  isOpen,
  openMenu,
}: {
  isOpen: boolean;
  openMenu: () => void;
}) => {
  const themeContext = useThemeContext();

  return (
    <button
      className={
        isOpen === false
          ? styles.hamburger
          : `${styles.hamburger} ${styles.active}`
      }
      onClick={openMenu}
    >
      <span
        className={
          themeContext.theme
            ? `${styles.bar} ${styles.dark}`
            : `${styles.bar} ${styles.light}`
        }
      ></span>
      <span
        className={
          themeContext.theme
            ? `${styles.bar} ${styles.dark}`
            : `${styles.bar} ${styles.light}`
        }
      ></span>
      <span
        className={
          themeContext.theme
            ? `${styles.bar} ${styles.dark}`
            : `${styles.bar} ${styles.light}`
        }
      ></span>
    </button>
  );
};

export default BurgerButton;
