import PostCard from "@/components/postCard/postCard";
import styles from './blog.module.css';
import { getPosts } from "@/lib/data";

// TODO: Rewrite this component to use the PostCard component, and remove the comments to link the data.
// Review Server Actions in Next.js to see how to fetch data from the server.
// Testing code for fetching data from the server
// const getData = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     next: { revalidate: 3600 }
//   });
//   if (!res.ok) {
//     throw new Error(res.statusText);
//   }
//   return await res.json();
// }

// BlogPage
const BlogPage = async () => {
  const posts = await getPosts();

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


// Defunct code for testing const: BlogPage and rendering a displayed PostCard
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