"use client"

import { login } from '@/lib/action';
import { useFormState } from "react-dom";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import styles from "./loginForm.module.css";


const LoginrForm = () => {
	const [state, formAction] = useFormState(login, undefined);

	const router = useRouter();

	// useEffect(() => {
	// 	state?.success && router.push("/login");
	// }, [state?.success, router]);

	return (
		<div>
			<div className={styles.container}>
				<h4>Register new user</h4>
				<form className={styles.form} action={formAction}>
					<input className={styles.input} type="text" placeholder="Username" name="username" />
					<input className={styles.input} type="password" placeholder="Password" name="password" />
					<button className={styles.button}>Login</button>
					{state?.error}
					<Link href="/register">
						{"Don't have an account?"} <b>Register</b>
					</Link>
				</form>
			</div>
		</div>
	);
};

export default LoginrForm;