import Image from 'next/image';
import styles from "./singlePost.module.css"

const PostPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image
					className={styles.img}
					src="https://images.pexels.com/photos/19130746/pexels-photo-19130746.jpeg"
					alt=''
					fill />
			</div>
			<div className={styles.textContainer}>
				<a className={styles.back} href="javascript:history.back()">Back</a>
				<h1 className={styles.title}>Title</h1>
				<div className={styles.detail}>
					<Image
						className={styles.avatar}
						src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
						alt=''
						width={50}
						height={50}
					/>
					<div className={styles.detailText}>
						<span className={styles.detailTitle}>Author</span>
						<span className={styles.detailValue}>Dmitrii Gareev</span>
					</div>
					<div className={styles.detailText}>
						<span className={styles.detailTitle}>Published</span>
						<span className={styles.detailValue}>10.03.2024</span>
					</div>

				</div>

				<div className={styles.content}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolore omnis vitae quia provident iusto qui quidem aliquam, quis sapiente, nobis dolor nemo impedit asperiores quaerat, doloribus pariatur ratione perferendis!
				</div>
			</div>
		</div>
	)
};

export default PostPage;