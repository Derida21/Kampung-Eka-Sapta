import { useEffect, useState } from "react";
import Layout from "../Layout";
import imgdefault from "../../../../assets/img/bg_sejarah.jpg";
import axios from "axios";

const Thumbnail = () => {
  const [about, setAbout] = useState({});

  const getDataAbout = async () => {
    try {
      const response = await axios.get("http://nurul-huda.org/api/sejarah");
      setAbout(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error.response || error.message);
    }
  };

  useEffect(() => {
    getDataAbout();
  }, []);

  return (
    <Layout className="flex flex-col gap-2">
      <Layout.Thumbnail title="Sejarah Desa" src={about.src || imgdefault} alt={about.alt || "Sejarah Desa"} />
      <Layout.Description>{about.isi}</Layout.Description>
    </Layout>
  );
};

export default Thumbnail;
