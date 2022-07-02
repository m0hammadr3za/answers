import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
        </ul>
      </div>

      <div>{children}</div>
    </div>
  );
}

export default Layout;
