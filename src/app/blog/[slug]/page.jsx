import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="post"
          fill className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.details}>
          <Image
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="author"
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
          <span className={styles.detailTitle}>Auth</span>
          <span className={styles.detailValue}>AuthFirst AuthLast</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>Date Published</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, veritatis. 
          Porro ratione iure placeat? Excepturi tenetur ducimus possimus deserunt? 
          Autem fugiat delectus provident ipsam ad ea aliquid vitae ducimus eligendi!
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;