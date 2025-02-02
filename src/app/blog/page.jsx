import PostCard from "@/components/postCard/postCard";
import styles from './blog.module.css';

// TODO: Rewrite this component to use the PostCard component, and remove the comments to link the data.
// Review Server Actions in Next.js to see how to fetch data from the server.

// getData
const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 3600 }
  });
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
      {data.map((post) => ( // AI rec this be changed to data.posts.map
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}

export default BlogPage;

// Possible alternative to the above code:
// BlogPage
// const BlogPage = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await getData();
//         setData(result);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className={styles.container}>
//       {data.map((post) => (
//         <div className={styles.post} key={post.id}>
//           <PostCard post={post} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BlogPage;


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