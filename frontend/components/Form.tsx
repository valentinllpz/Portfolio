import styles from '../styles/Form.module.scss';
import Button from './Button';
import { useState, useEffect } from 'react';

// interface IForm {
// 	name: string;
// 	email: string;
// 	message: string;
// }

const useForm = () => {
	const [values, setValues] = useState({
		name: '',
		email: '',
		message: '',
	});

	//const [errors, setErrors] = useState({});

	const handleChange = (e: { target: { name: string; value: string; }; }) => {
		const {name, value} = e.target;
		
		setValues({
			...values,
			[name]: value
		})
	};

	const handleSubmit = (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		console.log(values);
	}

	return ({handleChange, handleSubmit, values});
}

const Form = () => {
	const {handleChange, handleSubmit, values} = useForm();

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.inputContainer}>
				<label>
					Name
					<input className={styles.inputField} type='text' name='name' placeholder='Enter your full name' value={values.name} onChange={handleChange}/>
				</label>
			</div>
			<div className={styles.inputContainer}>
				<label>
					Email
					<input className={styles.inputField} type='email' name='email' placeholder='Enter a valid email address' value={values.email} onChange={handleChange}/>
				</label>
			</div>
			<div className={styles.inputContainer}>
				Message
				<label>
					<input className={styles.inputField} type='text' name='message' placeholder='Type your message here' value={values.message} onChange={handleChange}/>
				</label>
			</div>
			<Button text='Hit me up' type="submit"/>
		</form>
	)
}

export default Form;