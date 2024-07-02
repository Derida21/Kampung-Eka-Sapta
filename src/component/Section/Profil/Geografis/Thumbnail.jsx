import { useEffect, useState } from "react";
import Layout from "../Layout";
import imgdefault from "../../../../assets/img/bg_sejarah.jpg";

const Thumbnail = () => {
  const url = "";
  const [geografis, setGeografis] = useState({
    src: imgdefault,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  });

  const getDataGeografis = async () => {
    const response = await fetch(url);
    const dataGeografis = await response.json();
    setGeografis(dataGeografis);
    console.log(geografis);
  };

  useEffect(() => {
    getDataGeografis();
  }, []);

  return (
    <Layout className="flex flex-col gap-2">
      <Layout.Thumbnail
        title="Geografis Desa"
        src={geografis.src}
        alt={geografis.alt}
      />
      <Layout.Description>{geografis.description}</Layout.Description>
    </Layout>
  );
};

export default Thumbnail;
