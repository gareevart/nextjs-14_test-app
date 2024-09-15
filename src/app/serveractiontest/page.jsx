'use client'

import { useState } from 'react';
import { addPost, deletePost } from '@/lib/action';
import styles from "./serveractiontest.module.css";

const ServerAction = () => {
	const [file, setFile] = useState(null);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);

		if (file) {
			// Загрузка файла в Vercel Blob Storage
			const response = await fetch('/api/upload', {
				method: 'POST',
				body: file
			});
			const { url } = await response.json();

			// Добавляем URL изображения в formData
			formData.set('img', url);
		}

		// Вызов серверного действия
		await addPost(formData);

		// Очистка формы после отправки
		event.target.reset();
		setFile(null);
	};

	return (
		<div className={styles.container}>
			<h2>Create post</h2>
			<form className={styles.form} onSubmit={handleSubmit}>
				<input className={styles.input} type="text" placeholder="Title" name='title' />
				<textarea className={styles.input} placeholder="Post description" name='desc' cols="30" rows="10"></textarea>
				<input className={styles.input} type="text" placeholder="slug" name='slug' />
				<input className={styles.input} type="text" placeholder="userId" name='userId' />
				<input
					className={styles.input}
					type="file"
					accept="image/*"
					onChange={(e) => setFile(e.target.files[0])}
				/>
				<button type="submit">Create</button>
			</form>
			<form className={styles.form} action={deletePost}>
				<input type="text" placeholder="postId" name="id" />
				<button className={styles.detele}>Delete post</button>
			</form>
		</div>
	)
}

export default ServerAction;