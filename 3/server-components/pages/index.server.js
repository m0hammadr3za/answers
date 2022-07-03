import { fetch } from "react-fetch";
import PostCard from "../components/PostCard";

export default function Home() {
  const posts = fetch("https://jsonplaceholder.typicode.com/posts").json();

  return (
    <div>
      <div>
        <h1>Posts</h1>
        <p>Click on a post to read more about it!</p>
      </div>

      <div>
        {posts.length > 0 &&
          posts.map((post) => <PostCard key={post.id} data={post} />)}
      </div>
    </div>
  );
}
