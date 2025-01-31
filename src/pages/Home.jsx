import React from "react";
import Carousel from "../component/Section/Home/Carousel";
import News from "../component/Section/Home/News/News";
import Gallery from "../component/Section/Home/Gallery";
import Icon from "../component/Section/Home/Icon";
import penduduk from "../assets/icon/1x/icon-penduduk.png";
import pelayanan from "../assets/icon/1x/icon-pelayanan.png";
import keuangan from "../assets/icon/1x/icon-keuangan.png";
import pembangunan from "../assets/icon/1x/icon-pembangunan.png";

function Home() {
  return (
    <>
      {/* Carousel */}
      <div className="px-5 bg-slate-100 pt-14 pb-5 md:px-[60px] md:pt-[120px] lg:px-[80px] lg:pb-16 lg:pt-[130px] xl:px-[160px]">
        <Carousel />
      </div>
      {/* Data*/}
      <section className=" flex flex-col gap-3 lg:gap-10 px-5 py-5 md:py-10 md:px-[60px] lg:px-[80px] lg:py-[50px] xl:px-[160px]">
        <h1 className="lg:text-3xl font-[Poppins] font-bold text-teal-700 w-full text-center">
          Statistik Desa
        </h1>
        <div className="grid grid-cols-2 md:flex md:justify-around lg:justify-between gap-3">
          <Icon
            href="/profil/demografi-desa/statistik-penduduk"
            src={penduduk}
            alt="data-penduduk"
            text="Data Penduduk"
          />
          <Icon
            href="/pelayanan/pelayanan"
            src={pelayanan}
            alt="pelayanan"
            text="Layanan Masyarakat "
          />
          <Icon
            href=""
            src={keuangan}
            alt="keuangan-desa"
            text="Anggaran Desa"
          />
          <Icon
            href=""
            src={pembangunan}
            alt="pembangunan-desa"
            text="Pembangunan Desa"
          />
        </div>
      </section>
      {/* Berita */}
      <article className="relative bg-slate-100">
        <div className="flex flex-col justify-start gap-[20px] px-5 py-8 md:px-[60px] md:py-[50px] lg:px-[80px] xl:px-[160px]">
          <div className="flex flex-col w-full items-center gap-[10px]">
            <h1 className="lg:text-3xl font-[Poppins] font-bold text-teal-700">
              Berita Desa
            </h1>
            <span className="text-center font-[Poppins] font-medium text-xs lg:text-sm xl:text-lg text-gray-500">
              Menyajikan informasi terbaru tentang peristiwa, berita terkini,
              dan artikel-artikel jurnalistik dari Desa
            </span>
          </div>
          <News />
        </div>
      </article>
      {/* Galeri */}
      <section className="flex flex-col w-full bg-gradient-to-b from-teal-600 via-teal-700 to-teal-900 px-5 md:px-[60px] lg:px-20 xl:px-[160px] gap-5 lg:gap-[70px] py-10 lg:py-20 rounded-t-[36px]">
        <div className="flex flex-col gap-5 md:gap-10">
          <div className="w-full flex justify-center lg:text-3xl font-[Poppins] font-bold text-white">
            Galeri Desa
          </div>
          <div className="flex flex-col items-center gap-3 xl:gap-5 md:grid md:grid-cols-2 lg:grid-cols-4">
            <Gallery />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
