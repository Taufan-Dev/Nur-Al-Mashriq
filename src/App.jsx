import { Routes, Route } from "react-router-dom";
// components
import Navbar from "./components/navbar/navbar";

import Home from "./views/home";

function App() {
  return (
    <>
      <Navbar />
      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
