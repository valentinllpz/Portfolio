import Toggle from "./Toggle";
import styles from "../../styles/MobileMenu.module.scss";
import NavLink from "./NavLink";
import { useThemeContext } from "../../context/themeContext";
import BurgerButton from "./BurgerButton";
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";

const MobileMenu = ({
  isOpen,
  openMenu,
}: {
  isOpen: boolean;
  openMenu: () => void;
}) => {
  const themeContext = useThemeContext();
  const nodeRef = useRef(null);

  return (
    <>
      <BurgerButton isOpen={isOpen} openMenu={openMenu} />
      <CSSTransition
		nodeRef={nodeRef}
        in={isOpen}
        timeout={800}
        classNames="animMenu"
        unmountOnExit
      >
        <ul ref={nodeRef}
          className={
            themeContext.theme
              ? `${styles.navmenu} ${styles.dark}`
              : `${styles.navmenu} ${styles.light}`
          }
        >
          <li className={styles.navitem}>
            <NavLink title="Home" onClick={openMenu} />
          </li>
          <li className={styles.navitem}>
            <NavLink title="About" onClick={openMenu} />
          </li>
          <li className={styles.navitem}>
            <NavLink title="Projects" onClick={openMenu} />
          </li>
          <li className={styles.navitem}>
            <NavLink title="Contact" onClick={openMenu} />
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
