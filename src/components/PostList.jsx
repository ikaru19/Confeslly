import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from './PostList.module.css';

function PostList() { 
    const posts = useLoaderData();

    if (posts.length === 0) {
        return (
            <div className="no-posts" style={{ textAlign: 'center', color: 'white' }}>
                <h2>There are no posts yet.</h2>
                <p>Start adding some</p>
            </div>
        );
    }

    return (
        <ul className={classes.posts}>
            {posts.map((post) => (
                <Post key={post.id} id={post.id} author={post.author} body={post.body} />
            ))}
        </ul>
    );
}

export default PostList;
