import { Post, User } from "./models";
import { connectToDb } from "./utils";

// Export functions and error handling
// getPosts, getPost, getUsers
export const getPosts = async () => { // Export function to get all posts
    try {
        connectToDb();
        const posts = await Post.find();
        return posts;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch posts!");
    }
};

export const getPost = async (slug) => { // Export function to get a single post
    try {
        connectToDb();
        const post = await Post.findOne({ slug });
        return post;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch post!");
    }
};

export const getUsers = async (id) => { // Export function to get a single user
    try {
        connectToDb();
        const user = await User.findOne({ id });
        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch user!");
    }
};

// Temp data for testing
// users, posts
// const users = [
//     {
//         id: 1,
//         name: "Leanne Graham",
//         username: "Bret"
//     },
//     {
//         id: 2,
//         name: "Ervin Howell",
//         username: "Antonette"
//     },
//     {
//         id: 3,
//         name: "Clementine Bauch",
//         username: "Samantha"
//     }
// ];

// const posts = [
//     {
//         id: 1,
//         title: "Post 1",
//         body: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
//         userId: 1},
//     {
//         id: 2,
//         title: "Post 2",
//         body: "aut et iusto sed quo iurevoluptatem occaecati omnis eligendi aut adnvoluptatem doloribus vel accusantium quis pariatur",
//         userId: 2},
//     {
//         id: 3,
//         title: "Post 3",
//         body: "et iusto sed quo iurenvoluptatem occaecati omnis eligendi aut adnvoluptatem doloribus vel accusantium quis pariatur",
//         userId: 3}
// ];

// export const getPosts = async () => {
//     return posts;
// };

// export const getPost = async (id) => {
//     return posts.find(post => post.id === parseInt(id));
// };

// export const getUsers = async (id) => {
//     return users.find(user => user.id === parseInt(id));
// };