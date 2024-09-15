import Image from "next/image";
import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";

const PostUser = async ({ userId }) => {
	try {
		console.log(`PostUser component: Attempting to fetch user with id: ${userId}`);
		const user = await getUser(userId);
		console.log(`PostUser component: Successfully fetched user data for id: ${userId}`);

		if (!user) {
			return (
				<div className={styles.container}>
					<Image
						className={styles.avatar}
						src="/noavatar.png"
						alt="Deleted user avatar"
						width={50}
						height={50}
					/>
					<div className={styles.texts}>
						<span className={styles.title}>Author</span>
						<span className={styles.username}>Deleted user</span>
					</div>
				</div>
			);
		}

		return (
			<div className={styles.container}>
				<Image
					className={styles.avatar}
					src={user.img || "/noavatar.png"}
					alt={`Avatar of ${user.username}`}
					width={50}
					height={50}
				/>
				<div className={styles.texts}>
					<span className={styles.title}>Author</span>
					<span className={styles.username}>{user.username}</span>
				</div>
			</div>
		);
	} catch (error) {
		console.error('Error in PostUser:', error);
		return (
			<div className={styles.container}>
				<Image
					className={styles.avatar}
					src="/noavatar.png"
					alt="Deleted user avatar"
					width={50}
					height={50}
				/>
				<div className={styles.texts}>
					<span className={styles.title}>Author</span>
					<span className={styles.username}>Пользователь удален</span>
				</div>
			</div>
		);
	}
};

export default PostUser;