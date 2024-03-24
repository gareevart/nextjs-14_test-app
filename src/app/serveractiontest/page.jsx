import { addPost, deletePost } from '@/lib/action';
import styles from "./serveractiontest.module.css";

const ServerAction = () => {
	// const actionInComponent = async () => {
	// 	"use server"
	// 	console.log("it works!");
	// }
	return (
		<div className={styles.container}>
			<h2>Create post</h2>
			<form className={styles.form} action={addPost}>
				<input className={styles.input} type="text" placeholder="Title" name='title' />
				<textarea className={styles.input} type="text" placeholder="Post description" name='desc' id="" cols="30" rows="10"></textarea>
				<input className={styles.input} type="text" placeholder="slug" name='slug' />
				<input className={styles.input} type="text" placeholder="userId" name='userId' />
				<button>Create</button>
			</form>
			<form className={styles.form} action={deletePost}>
				<input type="text" placeholder="postId" name="id" />
				<button className={styles.detele}>Delete post</button>
			</form>
		</div>
	)
}

export default ServerAction;