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

const App = () => {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Popup />
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          {/* Profil */}
          <Route path="/Profil/Tentang Kami" element={<About />} />
          <Route path="/Profil/Sejarah Desa" element={<Sejarah />} />
          <Route path="/Profil/Visi Misi" element={<VisiMisi />} />
          <Route path="/Profil/Demografi Desa" element={<DemografisDesa />} />
          <Route path="/Profil/Geografi Desa" element={<GeografisDesa />} />
          {/* Pemerintahan */}
          <Route
            path="/Pemerintahan/Struktur Organisasi"
            element={<Struktur />}
          />
          <Route
            path="/Pemerintahan/Perangkat Desa"
            element={<PerangkatDesa />}
          />
          <Route path="/Pemerintahan/Lembaga Desa" element={<LembagaDesa />} />
          {/* Informasi Publik */}

          
          <Route path="/Pelayanan/Pelayanan" element={<Pelayanan />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
