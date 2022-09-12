import styles from "../styles/Form.module.scss";
import Button from "./Button";
import useForm from "../utils/useForm";

const Form = ({ submitForm }: { submitForm: () => void }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(submitForm);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputs}>
        <div className={styles.inputContainer}>
          <label htmlFor="name" className={styles.inputLabel}>
            <b>Name</b>
          </label>
          <input
            className={styles.inputField}
            type="text"
            name="name"
            maxLength={40}
            placeholder="Enter your full name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p className={styles.errorMsg}>{errors.name}</p>}
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="email" className={styles.inputLabel}>
            <b>Email</b>
          </label>
          <input
            className={styles.inputField}
            type="email"
            name="email"
            maxLength={40}
            placeholder="Enter a valid email address"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className={styles.errorMsg}>{errors.email}</p>}
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="message" className={styles.inputLabel}>
            <b>Message</b>
          </label>
          <textarea
            className={`${styles.inputField} ${styles.inputMessage}`}
            name="message"
            maxLength={4000}
            placeholder="Type your message here"
            rows={10}
            value={values.message}
            onChange={handleChange}
          />
          {errors.message && (
            <p className={styles.errorMsg}>{errors.message}</p>
          )}
        </div>
      </div>
      <div className={styles.buttonLink}>
        <Button text="Hit me up" type="submit" />
      </div>
    </form>
  );
};

export default Form;
