import styles from "../styles/Contact.module.scss";
import TextField from '@mui/material/TextField';
import { color } from "@mui/system";
import Form from "../components/Form";



const Contact = () => {
  return (
    <section className={styles.contact}>
		<h2 className={styles.h2}>Contact me</h2>
		<h3 className={styles.h3}>Want to work together or have any questions? Let’s talk.</h3>
			<Form/>
    </section>
  );
};

export default Contact;
