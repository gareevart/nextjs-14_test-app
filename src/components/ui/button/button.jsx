import styles from './button.module.css'

const Button = () => {
	const router = useRouter();

	const handleClick = () => {
		router.push('/projects');
	};

	return (
		<button className={styles.button} onClick={handleClick}>Перейти по ссылке</button>
	);
};

export default Button;