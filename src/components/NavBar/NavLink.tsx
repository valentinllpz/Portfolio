import Link from "next/link";
import { useThemeContext } from "../../context/themeContext";
import INavLinkProps from "../../interfaces/INavLinkProps";
import styles from "../../styles/NavLink.module.scss";

const NavLink = (props: INavLinkProps) => {
  const themeContext = useThemeContext();

  return (
    <Link href={`/#${props.title}`}>
      <a
	  	onClick={props.onClick}
        className={
          themeContext.theme
            ? `${styles.navlink} ${styles.dark}`
            : `${styles.navlink} ${styles.light}`
        }
      >
        {props.title}
      </a>
    </Link>
  );
};

export default NavLink;
