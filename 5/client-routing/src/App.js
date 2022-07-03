import { useEffect, useState } from "react";
import Home from "./Home";
import About from "./About";
import Team from "./Team";

function App() {
  const [page, setPage] = useState("/");

  useEffect(() => {
    const title =
      page === "/" ? "Home" : page.charAt(1).toUpperCase() + page.slice(2);
    window.history.replaceState(null, title, page);
  }, [page]);

  return (
    <>
      <div>
        <button onClick={() => setPage("/")}>Home</button>
        <button onClick={() => setPage("/about")}>About</button>
        <button onClick={() => setPage("/team")}>Team</button>
      </div>

      <div>
        {page === "/" && <Home />}
        {page === "/about" && <About />}
        {page === "/team" && <Team />}
      </div>
    </>
  );
}

export default App;
