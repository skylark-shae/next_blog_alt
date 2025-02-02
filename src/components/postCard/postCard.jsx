import Image from 'next/image';
import styles from './postCard.module.css';
import Link from 'next/link';

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          <Image src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="post" width={630} height={420} />
        </div>
        <span className={styles.date}>1.2.3456</span>
        {/* <span className={styles.date}>{postDate}</span> */}
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        {/* <h1 className={styles.title}>{post.title}</h1> */}
        <p className={styles.desc}>Description</p>
        {/* <p className={styles.desc}>{post.desc}</p> */}
        <Link className={styles.link} href="/blog/post">READ MORE</Link>
        {/* <Link className={styles.link} href={`/blog/${post.slug}`}>READ MORE</Link> */}
      </div>
    </div>
  );
};

export default PostCard;