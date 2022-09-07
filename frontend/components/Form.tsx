import styles from "../styles/Form.module.scss";
import Button from "./Button";
import { useState, useEffect } from "react";
import IForm from "../interfaces/IForm";
import IFormErrors from "../interfaces/IFormErrors";

const useForm = (callback: Function) => {
  const [values, setValues] = useState<IForm>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<IFormErrors>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  function validateInfo(values: IForm) {
    let errors = {
      name: "",
      email: "",
      message: "",
    };

    if (!values.name.trim()) {
      errors.name = "Name required";
    }
    if (!values.email) {
      errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
    if (!values.message.trim()) {
      errors.message = "Message field is empty";
    }
    if (errors.name || errors.email || errors.message) return errors;
    else return {};
  }

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setErrors(validateInfo(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (isSubmitting && Object.keys(errors).length === 0) {
      callback();
    }
  });

  return { handleChange, handleSubmit, values, errors };
};

const Form = ({ submitForm }: { submitForm: () => void }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(submitForm);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>
          Name
          <input
            className={styles.inputField}
            type="text"
            name="name"
            maxLength={40}
            placeholder="Enter your full name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p className={styles.error}>{errors.name}</p>}
        </label>
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>
          Email
          <input
            className={styles.inputField}
            type="email"
            name="email"
            maxLength={40}
            placeholder="Enter a valid email address"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </label>
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>
		Message
          <textarea
            className={styles.inputField}
            name="message"
            maxLength={5000}
            placeholder="Type your message here"
			rows={10}
            value={values.message}
            onChange={handleChange}
          />
          {errors.message && <p className={styles.error}>{errors.message}</p>}
        </label>
      </div>
      <Button text="Hit me up" type="submit" />
    </form>
  );
};

export default Form;
