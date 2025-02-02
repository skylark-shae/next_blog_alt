import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";
import Image from "next/image";

// PostUser component that fetches user data using the getUser function
const PostUser = async ({ userId }) => {
    const user = await getUser(userId);

    return (
        <div className={styles.container}>
            <Image
                className={styles.avatar}
                src={user.img ? user.img : "/noavatar.png"}
                alt=""
                width={50}
                height={50}
            />
            <div className={styles.texts}>
                <span className={styles.title}>Author</span>
                <span className={styles.username}>{user.username}</span>
            </div>
        </div>
    )
}

export default PostUser;

// Testing code for fetching data from the server
// // getData function to fetch data from the server using the fetch API
// // The function takes a userId as an argument and returns the user data
// const getData = async (userId) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
//     cache: "no-store"
//   });
//   if (!res.ok) {
//     throw new Error(res.statusText);
//   }
//   return await res.json();
// };

// // PostUser component that fetches user data using the getData function
// // The component takes a userId as a prop and displays the user data
// const PostUser = async ({ userId }) => {
//   try {
//     const user = await getData(userId);

//     return (
//       <div className={styles.container}>
//         <div className={styles.texts}>
//           <span className={styles.title}>Auth</span>
//           <span className={styles.username}>{user.username}</span>
//         </div>
//       </div>
//     );
//   } catch (error) { //Error handling
//     return <div>Error: {error.message}</div>;
//   }
// };

// export default PostUser;