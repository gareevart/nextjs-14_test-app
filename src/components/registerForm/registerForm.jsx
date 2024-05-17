"use client"

import styles from "./registerForm.module.css";
import { register } from '@/lib/action';
import { useFormState } from "react-dom";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";

const RegisterForm = () => {
	const [state, formAction] = useFormState(register, undefined);

	const router = useRouter();

	useEffect(() => {
		state?.success && router.push("/login");
	}, [state?.success, router]);

	return (
		<div>
			<div className={styles.container}>
				<h4>Register new user</h4>
				<form className={styles.form} action={formAction}>
					<input className={styles.input} type="text" placeholder="Username" name="username" />
					<input className={styles.input} type="mail" placeholder="Email" name="email" />
					<input className={styles.input} type="password" placeholder="Password" name="password" />
					<input className={styles.input} type="password" placeholder="Password again" name="passwordRepeat" />
					<button className={styles.button}>Register</button>
					{state?.error}
					<Link href="/login">
						Have an account? <b>Login</b>
					</Link>
				</form>
			</div>
		</div>
	);
};

export default RegisterForm;