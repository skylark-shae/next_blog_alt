import PostCard from "@/components/postCard/postCard";
import styles from './blog.module.css';

// TODO: Rewrite this component to use the PostCard component, and remove the comments to link the data.
// Review Server Actions in Next.js to see how to fetch data from the server.

// getData
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", { 
  next: { revalidate: 3600 }});
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

// BlogPage
const BlogPage = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      {posts.map((post) => ( // AI rec this be changed to data.posts.map
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}

export default BlogPage;


// Testing const: BlogPage
// const BlogPage = () => {
//   return (
//     <div className={styles.container}>
//       {/* PostCard component is used here */}
//       {/* Remove comments to link */}
//       <div className={styles.post} /* key={post.id} */ >
//         <PostCard /* post={post} */ />
//       </div>
//       <div className={styles.post} /* key={post.id} */ >
//         <PostCard /* post={post} */ />
//       </div>
//       <div className={styles.post} /* key={post.id} */ >
//         <PostCard /* post={post} */ />
//       </div>
//       <div className={styles.post} /* key={post.id} */ >
//         <PostCard /* post={post} */ />
//       </div>
//     </div>
//   );
// };