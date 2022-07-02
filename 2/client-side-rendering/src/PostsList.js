import { useEffect, useState } from "react";
import PostCard from "./PostCard";

function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  if (posts.length === 0) return;

  return (
    <div className="posts-list">
      <div>
        <h1>Posts</h1>
        <p>Click on a post to read more about it!</p>
      </div>

      <div>
        {posts.map((post) => (
          <PostCard key={post.id} data={post} />
        ))}
      </div>
    </div>
  );
}

export default PostsList;
