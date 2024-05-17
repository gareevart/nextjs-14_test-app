import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import Image from 'next/image';
import styles from "./home.module.css";
import Link from 'next/link';

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>This pet project by Dmitrii Gareev</h1>
      <p className={styles.desc}>text with description about my hobby</p>
      <div className={styles.buttons}>
        <Link href='/projects'><button className={styles.button}>Show all projects</button></Link>
        <Link href="/about" className={styles.button}>About me</Link>
      </div>
    </div>
    <div className={styles.grid}>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <Image src="/next.svg" alt="" fill sizes="100vw" className={styles.heroImg} />
        </div>
      </div>
    </div>

    <SpeedInsights />
    <Analytics />
  </div>
};

export default Home;