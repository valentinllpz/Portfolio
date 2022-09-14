import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/footer.svg"
          alt="footer"
          layout="fill"
		  priority={true}
          className={styles.image}
        />
      </div>
      <div className={styles.icons}>
        <a className={styles.iconLink} href="https://github.com/valentinllpz" target="_blank">
          <GitHubIcon color="inherit" />
        </a>
        <a className={styles.iconLink} href="https://github.com/valentinllpz" target="_blank">
          <LinkedInIcon color="inherit" />
        </a>
        <a className={styles.iconLink} href="valentin.ll@outlook.com" target="_blank">
        	<EmailIcon color="inherit" />
        </a>
      </div>
      <div className={styles.text}>
        Designed and developed with ❤ by Valentin Lugand Lopez
      </div>
    </footer>
  );
};

export default Footer;
