import Layout from "../../component/Section/Profil/Layout";
import imgdefault from "../../assets/img/bg_sejarah.jpg";
import { useEffect, useState } from "react";
import Penduduk from "../../component/Section/Profil/Demografi/penduduk";
import Agama from "../../component/Section/Profil/Demografi/agama";
import Pekerjaan from "../../component/Section/Profil/Demografi/pekerjaan";
import Kesejahteraan from "../../component/Section/Profil/Demografi/kesejahteraan";

const DemografisDesa = () => {
  const url = "";
  const [demografi, setDemografi] = useState({
    thumbnail: imgdefault,
    alt: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  });

  const getDataDemografi = async () => {
    const response = await fetch(url);
    const dataDemografi = await response.json();
    setDemografi(dataDemografi);
    console.log(demografi);
  };

  useEffect(() => {
    getDataDemografi();
  }, []);
  return (
    <section className="px-5 md:px-[60px] lg:px-[80px] xl:px-[160px] pb-5">
      <div className="flex flex-col items-center gap-3 pt-14 md:pt-[120px] lg:pt-[120px]">
        <Thumbnail
          thumbnail={demografi.thumbnail}
          description={demografi.description}
        />
      </div>
      <div className="flex flex-col mt-2 gap-2">
        <Penduduk />
        <Agama />
        <Pekerjaan />
        <Kesejahteraan />
      </div>
    </section>
  );
};

function Thumbnail({ thumbnail, alt, description }) {
  return (
    <Layout className="flex flex-col gap-2">
      <Layout.Thumbnail title="Demografi Desa" src={thumbnail} alt={alt} />
      <Layout.Description>{description}</Layout.Description>
    </Layout>
  );
}

export default DemografisDesa;
