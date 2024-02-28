import Image from 'next/image';
import styles from "./about.module.css";

export const metadata = {
	title: "About page",
	description: "Page about me",
};

const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.textContainer}>
				<h2 className={styles.subtitle}>About me</h2>
				<h1 className={styles.title}>Dmitrii Gareev – Product designer</h1>
				<p className={styles.desc}>
					Hello everyone im Product Designer from Serbia.
					My experience in product design for over 8 years.
					I help build scripts for highly loaded products such as: data management and control systems, K8s, SRE products and others
				</p>
				<div className={styles.boxes}>
					<div className={styles.box}>
						<h1>8 K+</h1>
						<p>Years of experience</p>
					</div>
					<div className={styles.box}>
						<h1>8 K+</h1>
						<p>Years of experience</p>
					</div>
					<div className={styles.box}>
						<h1>8 K+</h1>
						<p>Years of experience</p>
					</div>
				</div>
			</div>
			<div className={styles.imgContainer}>
				<Image
					src="/about.png"
					alt=""
					fill
					className={styles.img}
				/>
			</div>

		</div>
	);

};

export default About;