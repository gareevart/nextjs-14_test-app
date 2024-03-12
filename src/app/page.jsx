import { SpeedInsights } from "@vercel/speed-insights/next"
import Image from 'next/image';
import styles from "./home.module.css";
import Link from 'next/link';
import Button from '@/components/ui/button/button';

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>This pet project by Dmitrii Gareev</h1>
      <p className={styles.desc}>text with description about my hobby</p>
      <div className={styles.buttons}>
        <Link href='/projects'><button className={styles.button}>Show all projects</button></Link>
        <button className={styles.button}>About me</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt="" fill className={styles.brandImg} />
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
    </div>
    <SpeedInsights />
  </div>
};

export default Home;