import Toggle from "./Toggle";
import styles from "../styles/NavMenu.module.scss";
import NavLink from "./NavLink";

const NavMenu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <ul className={isOpen === false ? styles.navmenu : `${styles.navmenu} ${styles.active}`}>
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
