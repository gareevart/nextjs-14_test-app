import Image from 'next/image';
import styles from "./home.module.css";

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>This pet project by Dmitrii Gareev</h1>
      <p className={styles.desc}>text with description about my hobby</p>
      <div className={styles.buttons}>
        <button className={styles.button}>Show all projects</button>
        <button className={styles.button}>About me</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt="" fill className={styles.brandImg} />
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
    </div>
  </div>
};

export default Home;