import React from "react";
import Carousel from "../component/Section/Home/Carousel";
import Demografi from "../component/Section/Home/Demografi/Demografi";
import News from "../component/Section/Home/News/News";
import Gallery from "../component/Section/Home/Gallery";

function Home() {
  return (
    <>
      {/* Carousel */}
      <div className="px-5 pt-14 md:px-[60px] md:pt-[120px] lg:px-[80px] lg:pt-[130px] xl:px-[160px]">
        <Carousel />
      </div>
      {/* Demografi */}
      <section className="px-5 md:px-[60px] md:pt-[20px] lg:px-[80px] lg:py-[50px] xl:px-[160px]">
        <Demografi />
      </section>
      {/* Berita */}
      <article className="relative bg-slate-100">
        <div className="flex flex-col justify-start gap-[20px] px-5 py-8 md:px-[60px] md:py-[50px] lg:px-[80px] xl:px-[160px]">
          <div className="flex flex-col w-full items-center gap-[10px]">
            <span className="lg:text-3xl font-[Poppins] font-bold text-teal-700">
              Berita Desa
            </span>
            <span className="text-center font-[Poppins] font-medium text-xs lg:text-sm xl:text-lg text-gray-500">
              Menyajikan informasi terbaru tentang peristiwa, berita terkini,
              dan artikel-artikel jurnalistik dari Desa
            </span>
          </div>
          <News />
        </div>
        <div className="-z-10 absolute bg-teal-700 h-1/2 w-full left-0 bottom-0 rounded-t-lg lg:rounded-tl-[100px] lg:rounded-tr-[100px]"></div>
      </article>
      {/* Galeri */}
      <section className="flex flex-col bg-teal-700 w-full px-5 md:px-[60px] lg:px-20 xl:px-[160px] gap-5 lg:gap-[70px] py-10 lg:py-20 -mt-1">
        <div className="flex flex-col gap-5 md:gap-10">
          <div className="w-full flex justify-center lg:text-3xl font-[Poppins] font-bold text-white">
            Galeri Desa
          </div>
          <div className="flex flex-col items-center gap-5 xl:gap-10 md:grid md:grid-cols-2 lg:grid-cols-4">
            <Gallery />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
