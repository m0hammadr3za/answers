import { useRouter } from "next/router";
import { fetch } from "react-fetch";
import Link from "next/link";

export default function SinglePost() {
  const router = useRouter();
  const { id } = router.query;

  const post = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  return (
    <div>
      <div>
        <h1>{post?.title}</h1>
        <p>{post?.body}</p>
      </div>

      <Link href="/">
        <button>Go back</button>
      </Link>
    </div>
  );
}
