import { useThemeContext } from "../../context/themeContext";
import INavLinkProps from "../../interfaces/INavLinkProps";
import styles from "../../styles/NavLink.module.scss";

const NavLink = (props : INavLinkProps) => {
  const themeContext = useThemeContext();

  return (
    <a
      href={`/#${props.title}`}
	  onClick={props.onClick}
      className={
        themeContext.theme
          ? `${styles.navlink} ${styles.dark}`
          : `${styles.navlink} ${styles.light}`
      }
    >
      {props.title}
    </a>
  );
};

export default NavLink;
