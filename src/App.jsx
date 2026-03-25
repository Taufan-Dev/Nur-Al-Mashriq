import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scroll/ScrollToTop";
// components
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

import Home from "./views/home";
import MuseumDetail from "./pages/MuseumDetail";
import Maps from "./views/maps";
import Artikel from "./views/artikel";
import Ilmuan from "./views/ilmuan";

import ArticleDetailPage from "./views/artikel/detail";
import IlmuanDetailPage from "./views/ilmuan/detail";

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

        <Route path="/ilmuan" element={<Ilmuan />} />
        <Route path="/ilmuan/:id" element={<IlmuanDetailPage />} />

        <Route path="/artikel" element={<Artikel />} />
        <Route path="/artikel/:id" element={<ArticleDetailPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
