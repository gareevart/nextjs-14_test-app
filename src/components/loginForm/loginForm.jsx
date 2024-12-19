"use client"

import React from 'react';
import { login } from '@/lib/action';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import styles from "./loginForm.module.css";


const LoginrForm = () => {
	const [state, formAction] = React.useActionState(login, undefined);

	const router = useRouter();

	// useEffect(() => {
	// 	state?.success && router.push("/login");
	// }, [state?.success, router]);

	return (
		<div>
			<div className={styles.container}>
				<h4>Sign in</h4>
				<div className={styles.form}>
					<input className={styles.input} type="text" placeholder="Username" name="username" />
					<input className={styles.input} type="password" placeholder="Password" name="password" />
					<button className={styles.button} onClick={formAction}>Sign in</button>
					{state?.error}
					<Link href="/register">
						{"Don't have an account?"} <b>Register</b>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LoginrForm;