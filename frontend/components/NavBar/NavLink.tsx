import { useThemeContext } from "../../context/themeContext";
import styles from "../../styles/NavLink.module.scss";

const NavLink = ({ title }: { title: string }) => {
	const themeContext = useThemeContext();
	
  return (
  <a href={`/#${title}`} className={themeContext.theme ? `${styles.navlink} ${styles.dark}` : `${styles.navlink} ${styles.light}`}>{title}</a>
  );
};

export default NavLink;
