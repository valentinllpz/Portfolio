import styles from "../styles/Layout.module.scss";
import Navbar from "../components/NavBar/NavBar";
import { useThemeContext } from "../context/themeContext";
import Footer from "../components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const themeContext = useThemeContext();

  return (
    <div className={themeContext.theme ? styles.dark : styles.light}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
