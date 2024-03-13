import Image from 'next/image';
import styles from './postCard.module.css'
import Link from 'next/link';

const postCard = ({ post }) => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.imgContainer}>
					<Image
						src="https://images.pexels.com/photos/19130746/pexels-photo-19130746.jpeg"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						alt='' fill className={styles.img} />
				</div>
			</div>
			<div className={styles.bottom}>
				<span className={styles.date} >01.01.2024</span>
				<h1 className={styles.title}>{post.title}</h1>
				<p className={styles.desc}>{post.body} </p>
				<Link href={`/blog/${post.id}`}>Read more</Link>
			</div>
		</div>
	)
}

export default postCard