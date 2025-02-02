import Image from "next/image";
import styles from "./about.module.css";

export const metadata = { title: "About Page", description: "About page of the blog" };

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About NAME</h2>
        <h1 className={styles.title}>Short sales pitch</h1>
        <p className={styles.desc}>Long sales pitch</p>
        <div className={styles.box}>
          <div className={styles.box}><h1>#</h1><p>text</p></div>
          <div className={styles.box}><h1>#</h1><p>text</p></div>
          <div className={styles.box}><h1>#</h1><p>text</p></div>
          </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/about.png" alt="About Image" fill className={styles.img} />
            </div>
        </div>
    );
};

export default AboutPage;