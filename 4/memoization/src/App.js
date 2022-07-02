import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactMemo from "./ReactMemo";
import SecondaryUseMemo from "./SecondaryUseMemo";
import UseCallback from "./UseCallback";
import UseMemo from "./UseMemo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReactMemo />} />
        <Route path="/use-callback" element={<UseCallback />} />
        <Route path="/use-memo" element={<UseMemo />} />
        <Route path="/secondary-use-memo" element={<SecondaryUseMemo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
