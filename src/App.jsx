import Home from "./pages/Home";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/Profil/Tentang_Kami";
import Sejarah from "./pages/Profil/Sejarah";
import VisiMisi from "./pages/Profil/Visi_misi";
import DemografisDesa from "./pages/Profil/Demografi_Desa";
import GeografisDesa from "./pages/Profil/Geografi_Desa";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Header/Navbar";
import Popup from "./component/Pop-up";
import Struktur from "./pages/Pemerintahan/Struktur_Organisasi";
import ScrollToTop from "./scrooltop";
import PerangkatDesa from "./pages/Pemerintahan/Perangkat_Desa";
import LembagaDesa from "./pages/Pemerintahan/Lembaga_Desa";
import Pelayanan from "./pages/Pelayanan/Pelayanan";
import BeritaDesa from "./pages/Informasi Publik/Berita_Desa";
import DetailBerita from "./component/Section/Informasi Publik/Berita/Detail_Berita";

const App = () => {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Popup />
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* Profil */}
          <Route path="/profil/tentang-kami" element={<About />} />
          <Route path="/profil/sejarah-desa" element={<Sejarah />} />
          <Route path="/profil/visi-misi" element={<VisiMisi />} />
          <Route path="/profil/demografi-desa" element={<DemografisDesa />} />
          <Route path="/profil/geografi-desa" element={<GeografisDesa />} />
          {/* Pemerintahan */}
          <Route
            path="/pemerintahan/struktur-organisasi"
            element={<Struktur />}
          />
          <Route
            path="/pemerintahan/perangkat-desa"
            element={<PerangkatDesa />}
          />
          <Route path="/pemerintahan/lembaga-desa" element={<LembagaDesa />} />
          {/* Informasi Publik */}
          <Route
            path="/informasi-publik/berita-desa"
            element={<BeritaDesa />}
          />
          <Route
            path="/informasi-publik/berita-desa/:slug"
            element={<DetailBerita />}
          />
          {/* Pelayanan */}
          <Route path="/pelayanan/pelayanan" element={<Pelayanan />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
