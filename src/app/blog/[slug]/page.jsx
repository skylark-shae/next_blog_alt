import Image from "next/image";
import styles from "./singlePost.module.css";
import { Suspense } from "react";
import PostUser from "@/components/postUser/postUser";
import { getPost } from "@/lib/data";

//getPost error handling
const getPost = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?slug=${slug}`);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

//SinglePostPage
const SinglePostPage = async ({ params }) => {
  const { slug } = await params;
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.details}>
          <Image
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="author"
            width={50}
            height={50} />
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{post.createdAt.toString().slice(4, 16)}</span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  )
}

export default SinglePostPage;