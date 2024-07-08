import Table from "../../component/Section/Profil/Sejarah/Table/Layout";
import Thumbnail from "../../component/Section/Profil/Sejarah/Thumbnail";

const Sejarah = () => {
  return (
    <>
      <section className="px-5 md:px-[60px] lg:px-[80px] xl:px-[160px]">
        <div className="flex flex-col items-center gap-3 pt-14 md:pt-[120px] md:pb-[40px] lg:pt-[120px] lg:pb-[100px]">
          <Thumbnail />
          {/* <Table /> */}
        </div>
      </section>
    </>
  );
};

export default Sejarah;
