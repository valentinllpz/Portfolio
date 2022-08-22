import styles from "../styles/Layout.module.scss";
import Navbar from "../components/NavBar/NavBar";
import { useThemeContext } from "../context/themeContext";

const Layout = ({ children }: { children: React.ReactNode })  => {
	const themeContext = useThemeContext();

  return (
	<div className={themeContext.theme ? styles.dark : styles.light}>
		<Navbar/>
		{children}
	</div>
  )
}

export default Layout