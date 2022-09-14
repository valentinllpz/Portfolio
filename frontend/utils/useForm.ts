import { useEffect, useState } from "react";
import IForm from "../interfaces/IForm";
import IFormErrors from "../interfaces/IFormErrors";

const useForm = (callback: Function) => {
  const [values, setValues] = useState<IForm>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<IFormErrors>({
    name: "",
    email: "",
    message: "",
    status: "",
  });

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

  const handleSubmit =  (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setErrors(validateInfo(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (isSubmitting && Object.keys(errors).length === 0) {

      fetch("/api/sendgrid", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }).then((res) => {
        if (res.status === 200) {			
          setErrors({});
		  callback();
        } else {
          setErrors({
            ...errors,
            status:
              "An error occured. Please retry later or send me an email directly at vll.letstalk@gmail.com",
          });
        }
      });
    }
  });

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
