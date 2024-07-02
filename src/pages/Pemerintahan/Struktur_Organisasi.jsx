import ImgOrganiasi from "../../assets/img/Organisasi.jpg";

export default function Struktur() {
  return (
    <section className="px-5 md:px-[60px] lg:px-[80px] xl:px-[160px]">
      <div className="flex flex-col items-center gap-3 lg:gap-6 pt-16 pb-5 md:pt-[120px] md:pb-[40px] lg:pt-[120px] lg:pb-20">
        <h1 className="font-[Poppins] text-[16px] md:text-[24px] font-semibold text-teal-700">
          Struktur Organisasi
        </h1>
        <img src={ImgOrganiasi} alt="Image Organisasi" />
      </div>
    </section>
  );
}
