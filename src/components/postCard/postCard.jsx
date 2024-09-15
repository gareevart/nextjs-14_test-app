import Image from 'next/image';
import styles from './postCard.module.css'
import Link from 'next/link';

const PostCard = ({ post }) => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				{post.img && (
					<div className={styles.imgContainer}>
						<Image
							src={post.img || '/post-placeholder.png'}
							alt={post.title || 'Blog post image'}
							width={300}
							height={200}
							className={styles.img}
							placeholder="blur"
							blurDataURL="/post-placeholder.png"
						/>
					</div>
				)}
			</div>
			<div className={styles.bottom}>
				<span className={styles.date}>01.01.2024</span>
				<h4 className={styles.title}>{post.title}</h4>
				<p className={styles.desc}>{post.desc?.toString().slice(0, 30) || 'No description available'}</p>
				<Link href={`/blog/${post.slug}`}>Read more</Link>
			</div>
		</div>
	)
}

export default PostCard;