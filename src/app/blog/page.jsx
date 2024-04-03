import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from '@/lib/data';

// // FETCH DATA WITH AN API
export const blogApiLink = process.env.DOMAIN + "/api/blog";

const getData = async () => {
	const res = await fetch(blogApiLink, { next: { revalidate: 3600 } });

	if (!res.ok) {
		throw new Error("Something went wrong");
	}

	return res.json();
};

const BlogPage = async () => {

	// Fetch data with an api
	const posts = await getData();

	// FETCH DATA WITHOUT AN API
	// const posts = await getPosts();

	return (
		<div className={styles.container}>
			{posts.map((post) => (
				<div className={styles.post} key={post.id}>
					<PostCard post={post} />
				</div>
			))}
		</div>
	);
};

export default BlogPage