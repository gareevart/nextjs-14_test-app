import RegisterForm from '@/components/registerForm/registerForm';
import styles from "./register.module.css";

const Register = () => {
	return (
		<div className={styles.wrapper}>
			<RegisterForm />
		</div>
	)
};

export default Register;
