import { useEffect, useState } from "react";
import Layout from "../Layout";
import imgdefault from "../../../../assets/img/bg_sejarah.jpg";
import { idString } from "../../idtoString";

const Section = () => {
  const url = "";
  const [about, setAbout] = useState({
    src: imgdefault,
    latarbelakang: {
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    tujuan: {
      deskripsi: "",
      tujuanumum: {
        deskripsi:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      tujuankhusus: {
        deskripsi:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        point: [
          {
            id: 1,
            detailpoint:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          },
          {
            id: 2,
            detailpoint:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          },
        ],
      },
    },
    manfaat: [
      {
        id: 1,
        point: {
          deskripsi:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          scope: [
            {
              id: 1,
              detailscope: "",
            },
          ],
        },
      },
    ],
  });

  const getDataAbout = async () => {
    const response = await fetch(url);
    const dataAbout = await response.json();
    setAbout(dataAbout);
    console.log(about);
  };

  useEffect(() => {
    getDataAbout();
  }, []);

  return (
    <Layout className="flex flex-col gap-2">
      <Layout.Thumbnail title="Tentang Kami" src={about.src} alt={about.alt} />
      <Layout.Description>
        <div className="flex flex-col gap-2 lg:gap-5">
          <LatarBelakang latarbelakang={about.latarbelakang} />
          <Tujuan latarbelakang={about.latarbelakang} tujuan={about.tujuan} />
          <Manfaat manfaat={about.manfaat} />
        </div>
      </Layout.Description>
    </Layout>
  );
};

const LatarBelakang = ({ latarbelakang }) => {
  return (
    <div className="flex flex-col gap-2 lg:gap-5">
      <h1 className="font-[Poppins] text-[12px] md:text-[24px] font-semibold text-teal-700">
        Latar Belakang
      </h1>
      <p className="border-l-2 pl-3 md:pl-6 border-teal-700 h-full">
        {latarbelakang.deskripsi}
      </p>
    </div>
  );
};

const Tujuan = ({ tujuan }) => {
  return (
    <div className="flex flex-col gap-2 lg:gap-5">
      <h1 className="font-[Poppins] text-[12px] md:text-[24px] font-semibold text-teal-700">
        Tujuan
      </h1>
      <div className="flex flex-col border-l-2 pl-3 md:pl-6 border-teal-700 gap-2">
        <p>{tujuan.deskripsi}</p>
        {/* Tujuan Umum */}
        <div className="flex flex-col gap-2">
          <h1 className="text-teal-700 font-medium ">Tujuan Umum</h1>
          <p>{tujuan.tujuanumum.deskripsi}</p>
        </div>
        {/* Tujuan Khusus */}
        <div className="flex flex-col gap-2">
          <h1 className="text-teal-700 font-medium ">Tujuan Khusus</h1>
          <p>{tujuan.tujuankhusus.deskripsi}:</p>
          {tujuan.tujuankhusus.point.map((item) => {
            return (
              <table>
                <thead>
                  <tr key={item.id} className="w-full align-top ">
                    <td className="w-5">{idString(item.id)}</td>
                    <td className="">{item.detailpoint}</td>
                  </tr>
                </thead>
              </table>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Manfaat = ({ manfaat }) => {
  return (
    <div className="flex flex-col gap-2 lg:gap-5">
      <h1 className="font-[Poppins] text-[12px] md:text-[24px] font-semibold text-teal-700">
        Manfaat
      </h1>
      <div className="border-l-2 pl-3 md:pl-6 border-teal-700">
        {manfaat.map((item) => {
          return (
            <table>
              <thead>
                <tr key={item.id} className="w-full align-top ">
                  <td className="w-5">{idString(item.id)}</td>
                  <td className="">{item.point.deskripsi}</td>
                </tr>
              </thead>
            </table>
          );
        })}
      </div>
    </div>
  );
};
export default Section;
