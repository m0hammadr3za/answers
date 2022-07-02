import { Link } from "react-router-dom";

function PostSummary({ post }) {
  return (
    <Link to={`/${post.id}`}>
      <h1>{post.title}</h1>
      <p>{post.user.username}</p>
    </Link>
  );
}

export default PostSummary;
