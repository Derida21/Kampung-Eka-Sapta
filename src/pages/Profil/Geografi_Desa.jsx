import { Batas } from "../../component/Section/Profil/Geografis/BatasWilayah";
import Thumbnail from "../../component/Section/Profil/Geografis/Thumbnail";

const GeografisDesa = () => {
  return (
    <section className="px-5 md:px-[60px] lg:px-[80px] xl:px-[160px] pb-5">
      <div className="flex flex-col gap-3 pt-14 md:pt-[120px] lg:pt-[120px]">
        <Thumbnail />
      </div>
    </section>
  );
};

export default GeografisDesa;
