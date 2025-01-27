import { Outlet } from "react-router-dom";

import PostList from "../components/PostList";

function Posts() {
  return(
    <>
      <Outlet />
      <main>
        <PostList/>
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch('http://localhost:4000/posts')
  const resData = await response.json();
  return resData.posts;
}