import styles from "../styles/Contact.module.scss";
import Form from "../components/Form";
import { useState } from "react";
import Image from "next/image";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <section className={styles.contact} id="Contact">
      {!isSubmitted ? (
        <>
          <div className={styles.leftContainer}>
		  <div className={styles.imageContainer}>
            <Image
              src="/images/photoCV.png"
              alt="Valentin Lugand Lopez"
              layout="fill"
            />
          </div>
            <h2>Contact me</h2>
            <h3>Want to work together or have any questions? <span><b>Let’s talk.</b></span></h3>
          </div>
          <Form submitForm={submitForm} />{" "}
        </>
      ) : (
        <div className={styles.confirmation}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/confirmation.svg"
              alt="confirmation"
              layout="fill"
            />
          </div>
          Your message has been sent.
          <p>
            I will get back in touch with you as soon as I can. Meanwhile, why
            don’t you add me on <a href="https://www.linkedin.com/in/vlugand-lopez/" target="_blank">LinkedIn</a> ?
          </p>
        </div>
      )}
    </section>
  );
};

export default Contact;
