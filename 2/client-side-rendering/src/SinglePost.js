import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function SinglePost() {
  const { id } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, []);

  if (!post) return;

  return (
    <div>
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>

      <Link to="/">
        <button>Go back</button>
      </Link>
    </div>
  );
}

export default SinglePost;
