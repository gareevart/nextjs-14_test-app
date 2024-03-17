import Image from 'next/image';
import styles from './postCard.module.css'
import Link from 'next/link';
import { getPosts } from '@/lib/data';

const postCard = ({ post }) => {


	return (
		<div className={styles.container}>
			<div className={styles.top}>
				{post.img && <div className={styles.imgContainer}>
					<Image src={post.img} alt='' fill className={styles.img} />
				</div>}
			</div>
			<div className={styles.bottom}>
				<span className={styles.date}>01.01.2024</span>
				<h1 className={styles.title}>{post.title}</h1>
				<p className={styles.desc}>{post.desc.toString().slice(0, 30)}</p>
				<Link href={`/blog/${post.slug}`}>Read more</Link>
			</div>
		</div>
	)
}

export default postCard