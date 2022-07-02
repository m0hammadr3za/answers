import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostsList from "./PostsList";
import SinglePost from "./SinglePost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/:id" element={<SinglePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
