import { fetch } from "react-fetch";
import Link from "next/link";

export default function Post({ id }) {
  const post = fetch("https://jsonplaceholder.typicode.com/posts/" + id).json();

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

export async function getServerSideProps(context) {
  const { id } = context.query;
  return {
    props: {
      id,
    },
  };
}
