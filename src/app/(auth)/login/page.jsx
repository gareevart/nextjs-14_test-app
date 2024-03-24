import { handleGithubLogin, login } from '@/lib/action';
import styles from "../register/register.module.css"
import Link from 'next/link';

const Login = async () => {

	return (
		<div className={styles.container}>
			<h2>Sign in</h2>
			<form className={styles.form} action={login}>
				<input className={styles.input} type="text" placeholder="Username" name="username" />
				<input className={styles.input} type="password" placeholder="Password" name="password" />
				<button className={styles.button}>Sign in</button>
			</form>
			<form className={styles.form} action={handleGithubLogin}>
				<button className={styles.button}>Login with Github</button>

				<Link href="/register"><button className={styles.button}>Register</button ></Link>
			</form>

		</div >
	);
};

export default Login;