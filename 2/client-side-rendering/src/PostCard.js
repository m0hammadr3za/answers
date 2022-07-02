import { Link } from "react-router-dom";

function PostCard({ data }) {
  return (
    <Link to={`/${data.id}`}>
      <h1>{data.title}</h1>
    </Link>
  );
}

export default PostCard;
