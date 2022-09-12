import Toggle from "./Toggle";
import styles from "../../styles/MobileMenu.module.scss";
import NavLink from "./NavLink";
import { useThemeContext } from "../../context/themeContext";
import BurgerButton from "./BurgerButton";
import { CSSTransition } from "react-transition-group";

const MobileMenu = ({
  isOpen,
  openMenu,
}: {
  isOpen: boolean;
  openMenu: () => void;
}) => {
  const themeContext = useThemeContext();

  return (
    <>
      <BurgerButton isOpen={isOpen} openMenu={openMenu} />
      <CSSTransition
        in={isOpen}
        timeout={800}
        classNames="animMenu"
        unmountOnExit
      >
        <ul
          className={
            themeContext.theme
              ? `${styles.navmenu} ${styles.dark}`
              : `${styles.navmenu} ${styles.light}`
          }
        >
          <li className={styles.navitem}>
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
      </CSSTransition>
    </>
  );
};

export default MobileMenu;
