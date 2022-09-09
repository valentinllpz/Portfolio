import Image from "next/image";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.imageContainer}>
        <Image src="/images/footer.svg" alt="footer" layout="fill"  className={styles.image}/>
      </div>
	  <div className={styles.icons}>
	  	<GitHubIcon color='inherit'/> 
	  	<LinkedInIcon color='inherit'/>  
	  	<EmailIcon color='inherit'/>  
	  </div>
	  <div className={styles.text}>Designed and developed with ❤ by Valentin Lugand Lopez</div>
    </footer>
  );
};

export default Footer;
