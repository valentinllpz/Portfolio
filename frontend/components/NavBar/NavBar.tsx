import { useState } from "react";
import styles from "../../styles/NavBar.module.scss";
import NavMenu from "./NavMenu";
import BurgerButton from "./BurgerButton";
import Image from "next/image";
import { useThemeContext } from "../../context/themeContext";

const Navbar = () => {
  const themeContext = useThemeContext();
  const [isOpen, setIsOpen] = useState(false);
  
  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
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
        <Image
          src={
            themeContext.theme
              ? "/images/logo-light.svg"
              : "/images/logo-dark.svg"
          }
          height={40}
          width={40}
        />
        <NavMenu isOpen={isOpen} />
        <BurgerButton isOpen={isOpen} openMenu={openMenu} />
      </nav>
    </header>
  );
};

export default Navbar;
