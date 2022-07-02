import PostCard from "../components/PostCard";

export default function Home({ posts }) {
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

export async function getStaticProps() {
  console.log("Generated / Regenerated static files!");

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}
