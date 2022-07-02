import Link from "next/link";

export default function SinglePost({ post }) {
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

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const paths = posts.map((post) => ({ params: { id: post.id.toString() } }));

  return {
    paths,
    fallback: true,
  };
}
