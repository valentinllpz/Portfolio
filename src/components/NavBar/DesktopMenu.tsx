import NavLink from "./NavLink"
import Toggle from "./Toggle"
import styles from "../../styles/DesktopMenu.module.scss";

const DesktopMenu = () => {
	return (
		<ul className={styles.desktopMenu}>
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
	)
}

export default DesktopMenu;