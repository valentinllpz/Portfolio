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
    <section className={styles.contact}>
      {!isSubmitted ? (
        <>
          <div className={styles.leftContainer}>
            <h2 className={styles.h2}>Contact me</h2>
            <h3 className={styles.h3}>
              Want to work together or have any questions? Let’s talk.
            </h3>
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
            don’t you add me on LinkedIn ?
          </p>
        </div>
      )}
    </section>
  );
};

export default Contact;
