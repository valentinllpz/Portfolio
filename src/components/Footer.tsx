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
          alt="footer shape"
          layout="fill"
		  priority={true}
          className={styles.image}
        />
      </div>
      <div className={styles.icons}>
        <a className={styles.iconLink} href="https://github.com/valentinllpz" target="_blank" rel="noreferrer">
          <GitHubIcon color="inherit" sx={{ fontSize: 28 }}/>
        </a>
        <a className={styles.iconLink} href="https://www.linkedin.com/in/vlugand-lopez/" target="_blank" rel="noreferrer">
          <LinkedInIcon color="inherit" sx={{ fontSize: 28 }}/>
        </a>
        <a className={styles.iconLink} href="valentin.ll@outlook.com" target="_blank">
        	<EmailIcon color="inherit" sx={{ fontSize: 28 }}/>
        </a>
      </div>
      <div className={styles.text}>
        Designed and developed with ❤ by Valentin Lugand Lopez
      </div>
    </footer>
  );
};

export default Footer;
