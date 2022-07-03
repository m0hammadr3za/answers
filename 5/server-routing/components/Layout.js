export default function Layout({ children }) {
  return (
    <div>
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/team">Team</a>
          </li>
        </ul>
      </div>

      <div>{children}</div>
    </div>
  );
}
