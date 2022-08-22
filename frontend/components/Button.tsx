import styles from '../styles/Button.module.scss';

const Button = ({text} : {text : string}) => {
	return (
		<button className={styles.button}>{text}</button>
	)
}

export default Button;