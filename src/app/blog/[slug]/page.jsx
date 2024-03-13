import Image from 'next/image';
import styles from "./singlePost.module.css"
import PostUser from "@/components/postUser/postUser";
import { Suspense } from 'react';

// const getData = async (slug) => {
// 	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

// 	if (!res.ok) {
// 		throw new Error("Something went wrong")
// 	}
// 	return res.json();
// };

const PostPage = async ({ params }) => {

	const { slug } = params;
	// const post = await getData(slug);

	// fetch data without an api
	const posts = await getPosts(slug);
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image
					className={styles.img}
					src="https://images.pexels.com/photos/19130746/pexels-photo-19130746.jpeg"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					alt=''
					fill />
			</div>
			<div className={styles.textContainer}>
				<h1 className={styles.title}>{post.title}</h1>
				<div className={styles.detail}>
					<Image
						className={styles.avatar}
						src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
						alt=''
						width={50}
						height={50}
					/>
					<Suspense fallback={<div>Loading...</div>}>
						<PostUser userId={post.userId} />
					</Suspense>
					<div className={styles.detailText}>
						<span className={styles.detailTitle}>Published</span>
						<span className={styles.detailValue}>10.03.2024</span>
					</div>

				</div>

				<div className={styles.content}>{post.body}</div>
			</div>
		</div>
	)
};

export default PostPage;