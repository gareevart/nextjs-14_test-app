"use client"

import { register } from '@/lib/action';
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";

const RegisterForm = () => {
	const [state, formAction] = useFormState(register, undefined);

	return (
		<div>
			<div className={styles.container}>
				<h2>Register new user</h2>
				<form className={styles.form} action={register}>
					<input className={styles.input} type="text" placeholder="Username" name="username" />
					<input className={styles.input} type="mail" placeholder="Email" name="email" />
					<input className={styles.input} type="password" placeholder="Password" name="password" />
					<input className={styles.input} type="password" placeholder="Password again" name="passwordRepeat" />
					<button>Register</button>
				</form>
			</div>
		</div>
	);
};

export default RegisterForm;