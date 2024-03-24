// pages/blog.jsx
import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from '@/lib/data';

export async function getStaticProps() {
	const posts = await getPosts();

	return {
		props: {
			posts,
		},
		revalidate: 10,
	};
}

const BlogPage = ({ posts }) => {
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
