import styles from "./postUser.module.css";

const getData = async (userId) => {
	try {
		const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { cache: "no-store" });

		if (!res.ok) {
			throw new Error("Something went wrong");
		}
		return res.json();

	} catch (error) {
		return { error: error.message };
	}
};


const postUser = async ({ userId }) => {

	const user = await getData(userId);
	if (user.error) {
		// Handle the error case here
		console.error("Error fetching user data:", user.error);
		return null; // Or return an appropriate fallback UI
	}
	return (
		<div className={styles.container}>
			<span className={styles.title}>Author</span>
			<span className={styles.username}>{user.username}</span>
		</div>
	);
};

export default postUser;