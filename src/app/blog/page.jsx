import PostCard from "@/components/postCard/postCard";
import styles from './blog.module.css';

const BlogPage = () => {
  return (
    <div className={styles.container}>
      {/* PostCard component is used here */}
      {/* Remove comments to link */}
      <div className={styles.post} /* key={post.id} */ >
        <PostCard /* post={post} */ />
      </div>
      <div className={styles.post} /* key={post.id} */ >
        <PostCard /* post={post} */ />
      </div>
      <div className={styles.post} /* key={post.id} */ >
        <PostCard /* post={post} */ />
      </div>
      <div className={styles.post} /* key={post.id} */ >
        <PostCard /* post={post} */ />
      </div>
    </div>
  );
};

export default BlogPage;