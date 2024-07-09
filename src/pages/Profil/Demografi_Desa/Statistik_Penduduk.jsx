import Layout from "../../../component/Section/Profil/Demografi/Layout";

const StatistikPenduduk = () => {
  return (
    <section className="px-5 md:px-[60px] lg:px-[80px] xl:px-[160px] pb-5">
      <div className="flex flex-col gap-1 pt-14 md:pt-[120px] lg:pt-[120px]">
        <h1 className="font-[Poppins] text-[12px] md:text-[24px] font-semibold text-teal-700">
          Demografi Desa
        </h1>

        <Layout />
      </div>
      <div className="flex flex-col mt-2"></div>
    </section>
  );
};

export default StatistikPenduduk;
