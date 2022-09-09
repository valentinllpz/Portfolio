import Image from "next/image";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.imageContainer}>
        <Image src="/images/footer.svg" alt="footer" layout="fill"  className={styles.image}/>
      </div>
    </footer>
  );
};

export default Footer;
