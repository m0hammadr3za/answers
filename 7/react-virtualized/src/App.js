import { BrowserRouter, Routes, Route } from "react-router-dom";
import LongList from "./LongList";
import Windowing from "./Windowing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LongList />} />
        <Route path="/windowing" element={<Windowing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
