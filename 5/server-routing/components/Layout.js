import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/team">Team</Link>
          </li>
        </ul>
      </div>

      <div>{children}</div>
    </div>
  );
}
