import Image from 'next/image';
import styles from "./singlePost.module.css"
import PostUser from "@/components/postUser/postUser";
import { Suspense } from 'react';
import { getPost } from '@/lib/data';
import { formatDate } from '@/lib/dateUtils';
import { blogApiLink } from '../page';

// fetch data with an api
const getData = async (slug) => {
	const res = await fetch(`https://gareev.vercel.app/api/blog/${slug}`);

	if (!res.ok) {
		throw new Error("Something went wrong")
	}
	return res.json();
};

// for SEO optimisation
export const generateMetadata = async ({ params }) => {
	const { slug } = params;

	const post = await getPost(slug);
	return {
		title: post.title,
		description: post.desc,
	};
};

const PostPage = async ({ params }) => {
	const { slug } = params;
	const post = await getData(slug);

	// fetch data without an api
	// const post = await getPost(slug);

	console.log(post);
	return (
		<div className={styles.container}>
			{post.img && <div className={styles.imgContainer}>
				<Image
					src={post.img || "/post-placeholder.png"}
					alt={post.title || "Post Image"}
					className={styles.img}
					sizes="500px"
					fill
					style={{
						objectFit: 'cover',
					}}
				/>
			</div>}
			<div className={styles.textContainer}>
				<h1 className={styles.title}>{post.title}</h1>
				<div className={styles.detail}>
					{post && (
						<Suspense fallback={<div>Loading...</div>}>
							<PostUser userId={post.userId} />
						</Suspense>
					)}

					<div className={styles.detailText}>
						<span className={styles.detailTitle}>Published</span>
						<span className={styles.detailValue}>{formatDate(post.createdAt)}</span>
					</div>

				</div>

				<div className={styles.content}>{post.desc}</div>
			</div>
		</div>
	)
};

export default PostPage;