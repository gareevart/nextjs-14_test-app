import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from '@/lib/data';

export const dynamic = 'force-dynamic';
export const blogApiLink = process.env.DOMAIN + "/api/blog";

async function getData() {
	const res = await fetch(blogApiLink, { next: { revalidate: 3600 } });

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

const BlogPage = async () => {
	try {
		const posts = await getData();

		if (!posts || posts.length === 0) {
			return <div>No posts available</div>;
		}

		return (
			<div className={styles.container}>
				{posts.map((post) => (
					<div className={styles.post} key={post.id}>
						<PostCard post={post} />
					</div>
				))}
			</div>
		);
	} catch (error) {
		console.error('Error fetching blog posts:', error);
		return <div>Error loading blog posts</div>;
	}
};

export default BlogPage;