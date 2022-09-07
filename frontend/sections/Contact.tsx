import styles from "../styles/Contact.module.scss";
import Form from "../components/Form";
import { useState } from "react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <section className={styles.contact}>
      <div className={styles.leftContainer}>
        <h2 className={styles.h2}>Contact me</h2>
        <h3 className={styles.h3}>
          Want to work together or have any questions? Let’s talk.
        </h3>
      </div>

      {!isSubmitted ? <Form submitForm={submitForm} /> : <p>submitted</p>}
    </section>
  );
};

export default Contact;
