import { useState } from "react";
import styles from "../../styles/NavBar.module.scss";
import Image from "next/image";
import { useThemeContext } from "../../context/themeContext";
import useWindowDimensions from "../../utils/useWindowDimensions";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

const Navbar = () => {
  const themeContext = useThemeContext();
  const { width } = useWindowDimensions();

  const [isOpen, setIsOpen] = useState(false);

  const openBurgerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className={
          themeContext.theme
            ? `${
                isOpen
                  ? `${styles.navbar} ${styles.hidden}`
                  : `${styles.navbar} ${styles.dark}`
              }`
            : `${
                isOpen
                  ? `${styles.navbar} ${styles.hidden}`
                  : `${styles.navbar} ${styles.light}`
              }`
        }
      >
        <Link href="/#Home">
          <a>
            <Image
              src={
                themeContext.theme
                  ? "/images/logo-light.svg"
                  : "/images/logo-dark.svg"
              }
			  alt="logo"
              height={40}
              width={40}
            />
          </a>
        </Link>
        {width && (
          <>
            {width < 768 ? (
              <MobileMenu isOpen={isOpen} openMenu={openBurgerMenu} />
            ) : (
              <DesktopMenu />
            )}
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
