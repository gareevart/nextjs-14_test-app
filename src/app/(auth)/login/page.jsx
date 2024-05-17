import { handleGithubLogin } from '@/lib/action';
import LoginrForm from '@/components/loginForm/loginForm';
import styles from "./login.module.css";

const Login = async () => {

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<form className={styles.form} action={handleGithubLogin}>
					<button className={styles.button}>Login with Github</button>
					<LoginrForm />
				</form>
			</div>
		</div >
	);
};

export default Login;