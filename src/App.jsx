import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scroll/ScrollToTop";
// components
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

import Home from "./views/home";
import MuseumDetail from "./pages/MuseumDetail";
import Maps from "./views/maps";
import Artikel from "./views/artikel";

import ArticleDetailPage from "./views/artikel/detail";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/museum/:id" element={<MuseumDetail />} />

        <Route path="/artikel" element={<Artikel />} />
        <Route path="/artikel/detail" element={<ArticleDetailPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
