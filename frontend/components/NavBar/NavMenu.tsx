import Toggle from "./Toggle";
import styles from "../../styles/NavMenu.module.scss";
import NavLink from "./NavLink";
import { useThemeContext } from "../../context/themeContext";

const NavMenu = ({ isOpen }: { isOpen: boolean }) => {
  const themeContext = useThemeContext();

  return (
    <ul
      className={
        themeContext.theme
          ? `${
              isOpen === false
                ? styles.navmenu
                : `${styles.navmenu} ${styles.active}`
            } ${styles.dark}`
          : `${
              isOpen === false
                ? styles.navmenu
                : `${styles.navmenu} ${styles.active}`
            } ${styles.light}`
      }
    >
      <li className={`${styles.homeitem} ${styles.navitem}`}>
        <NavLink title="Home" />
      </li>
      <li className={styles.navitem}>
        <NavLink title="About" />
      </li>
      <li className={styles.navitem}>
        <NavLink title="Projects" />
      </li>
      <li className={styles.navitem}>
        <NavLink title="Contact" />
      </li>
      <li className={styles.navitem}>
        <Toggle />
      </li>
    </ul>
  );
};

export default NavMenu;
