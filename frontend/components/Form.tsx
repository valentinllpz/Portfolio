import styles from '../styles/Form.module.scss';
import Button from './Button';
import { useState, useEffect, SetStateAction } from 'react';

interface IForm {
	name: string;
	email: string;
	message: string;
}


function validateInfo(values : IForm) {
	let errors = {
		name: '',
		email: '',
		message: '',
	};
  
	if (!values.name.trim()) {
	  errors.name = 'Name required';	  
	}
	if (!values.email) {
	  errors.email = 'Email required';
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
	  errors.email = 'Email address is invalid';
	}
	if (!values.message.trim()) {
		errors.message = 'Message field is empty';
	}
	return errors;
  }


const useForm = (validateInfo: { (values: IForm): { name: string; email: string; message: string; }; (arg0: IForm): SetStateAction<IForm>; }) => {
	const [values, setValues] = useState<IForm>({
		name: '',
		email: '',
		message: '',
	});

	const [errors, setErrors] = useState<IForm>({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e: { target: { name: string; value: string; }; }) => {
		const {name, value} = e.target;
		
		setValues({
			...values,
			[name]: value
		})
	};

	const handleSubmit = (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		setErrors(validateInfo(values));
	}

	return ({handleChange, handleSubmit, values, errors});
}

const Form = () => {
	const {handleChange, handleSubmit, values, errors} = useForm(validateInfo);

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.inputContainer}>
				<label>
					Name
					<input className={styles.inputField} type='text' name='name' maxLength={40} placeholder='Enter your full name' value={values.name} onChange={handleChange}/>
					{errors.name && <p>{errors.name}</p>}
				</label>
			</div>
			<div className={styles.inputContainer}>
				<label>
					Email
					<input className={styles.inputField} type='email' name='email' maxLength={40} placeholder='Enter a valid email address' value={values.email} onChange={handleChange}/>
					{errors.email && <p>{errors.email}</p>}
				</label>
			</div>
			<div className={styles.inputContainer}>
				Message
				<label>
					<textarea className={styles.inputField} name='message' maxLength={5000} placeholder='Type your message here' value={values.message} onChange={handleChange}/>
					{errors.message && <p>{errors.message}</p>}
				</label>
			</div>
			<Button text='Hit me up' type="submit"/>
		</form>
	)
}

export default Form;