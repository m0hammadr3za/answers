import Link from "next/link";

export default function PostCard({ data }) {
  return (
    <Link href={`/post/${data.id}`}>
      <a>
        <h1>{data.title}</h1>
      </a>
    </Link>
  );
}
