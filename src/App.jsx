import { Routes, Route } from "react-router-dom";
// components
import Navbar from "./components/navbar/navbar";

import Home from "./views/home";
import MuseumDetail from "./pages/MuseumDetail";
import Maps from "./views/maps";

function App() {
  return (
    <>
      <Navbar />
      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/museum/:id" element={<MuseumDetail />} />
      </Routes>
    </>
  );
}

export default App;
