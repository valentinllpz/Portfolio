import styles from "../styles/Layout.module.scss";
import Navbar from "../components/NavBar/NavBar";
import { useThemeContext } from "../context/themeContext";
import Footer from "../components/Footer";
import Head from "next/head";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const themeContext = useThemeContext();

  return (
    <>
      <Head>
        <title>
          Valentin Lugand Lopez | Junior Developper | Paris
        </title>
		<meta charSet="utf-8" />
        <meta
          name="description"
          content="Looking for a junior developper in Paris or remote? Checkout my portfolio built with NextJS and Typescript!"
          key="desc"
        />
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		<link rel="preload" href="/fonts/SF-Pro-Display/SF-Pro-Display-Heavy.otf" as="font" type="font/otf" crossOrigin="" />
		<link rel="preload" href="/fonts/SF-Pro-Display/SF-Pro-Display-Medium.otf" as="font" type="font/otf" crossOrigin="" />
		<link rel="preload" href="/fonts/SF-Pro-Display/SF-Pro-Display-Regular.otf" as="font" type="font/otf" crossOrigin="" />
		<link rel="preload" href="/fonts/SF-Compact-Text/SF-Compact-Text-Thin.otf" as="font" type="font/otf" crossOrigin="" />
		<link rel="preload" href="/fonts/SF-Compact-Text/SF-Compact-Text-Light.otf" as="font" type="font/otf" crossOrigin="" />
		<link rel="preload" href="/fonts/SF-Compact-Text/SF-Compact-Text-Medium.otf" as="font" type="font/otf" crossOrigin="" />
      </Head>
      <div className={themeContext.theme ? styles.dark : styles.light}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
