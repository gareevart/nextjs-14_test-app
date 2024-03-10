import Image from 'next/image';
import styles from './postCard.module.css'
import Link from 'next/link';

const postCard = () => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.imgContainer}>
					<Image src="https://images.pexels.com/photos/19130746/pexels-photo-19130746.jpeg" alt='' fill className={styles.img} />
				</div>
				<span className={styles.date} >01.01.2024</span>
			</div>
			<Link href="/blog/post">
				<div className={styles.bottom}>
					<h1 className={styles.title}>Title</h1>
					<p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur fugiat, nostrum vero aliquam dolorum vitae numquam maxime quasi, distinctio illum in quidem reiciendis ad at, iste possimus architecto velit corrupti.</p>
					<Link href="/blog/post">Read more</Link>
				</div>
			</Link>
		</div>
	);
}

export default postCard