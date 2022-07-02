import Link from "next/link";

function SinglePost({ post }) {
  return (
    <div>
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>

      <Link href="/">
        <button>Go back</button>
      </Link>
    </div>
  );
}

export default SinglePost;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}
