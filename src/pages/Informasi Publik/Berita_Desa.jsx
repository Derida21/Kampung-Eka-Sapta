import { Thumbnail } from "../../component/Section/Informasi Publik/Thumbnail";
import bg_img from "../../assets/img/bg_berita.png";
import Card from "../../component/Section/Home/News/Card";
import Items from "../../component/Section/Informasi Publik/Items";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BeritaDesa() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("http://nurul-huda.org/api/berita");
      setData(response.data.data.data);
      console.log(response.data.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  const headline = data[0];
  const others = data.slice(1);

  return (
    <div className="px-5 pt-14 md:px-[60px] md:pt-[120px] lg:px-[80px] lg:pt-[130px] xl:px-[160px]">
      <div className="w-full p-5 bg-white rounded-xl shadow border border-gray-500 flex-col justify-center items-start gap-5 inline-flex">
        {headline && (
          <Thumbnail
            note="Berita Tebaru"
            bg={headline.thumbnail}
            title={headline.judul}
            description={headline.isi}
          />
        )}

        <div className="flex flex-rows justify-between items-start gap-5 w-full">
          {/* Main */}
          <Items text="Berita Lainnya" className="w-full flex flex-col gap-5">
            {others.map((news, index) => {
              return (
                <Card
                  key={index}
                  container="w-full p-0"
                  wrapper="flex w-full gap-5"
                >
                  <Card.Thumbnail
                    src={news.thumbnail}
                    className="md:w-full h-[200px] rounded-xl"
                  />
                  <Card.Detail
                    className="w-full"
                    title={news.judul}
                    descriptionclassName="max-w-[400px] font-[Poppins] text-justify text-gray-500 line-clamp-5"
                  >
                    {news.isi}
                  </Card.Detail>
                </Card>
              );
            })}
          </Items>
          {/* Side */}
          <div className="flex flex-col gap-5 w-[400px]">
            <Items
              text="Agenda Kegiatan"
              className="flex flex-col text-nowrap gap-5 "
              childrenclassName="flex flex-col gap-2 p-3 rounded-lg bg-white shadow-lg"
            >
              <Card container="p-0 bg-white" wrapper="flex flex-col gap-2">
                <Card.Thumbnail src={bg_img} className=" h-32 rounded-lg" />
                <Card.Detail
                  className="px-3"
                  title="Lorem ipsum dolor sit amet consectetur."
                  titleclassName="text-[16px] font-medium text-wrap font-[Poppins] text-gray-700 line-clamp-3"
                />
              </Card>
              <Card container="p-0" wrapper="flex flex-col gap-2">
                <Card.Thumbnail src={bg_img} className=" h-32 rounded-lg" />
                <Card.Detail
                  className=""
                  title="Lorem ipsum dolor sit amet consectetur."
                  titleclassName="text-[16px] font-medium text-wrap font-[Poppins] text-gray-700 line-clamp-3"
                />
              </Card>
            </Items>
            <Items
              text="Galeri Desa"
              className="flex flex-col text-nowrap gap-5 "
              childrenclassName="flex flex-col gap-2 p-3 rounded-lg bg-white shadow-lg"
            >
              <Card container="p-0 bg-white" wrapper="flex flex-col gap-2">
                <Card.Thumbnail src={bg_img} className=" h-32 rounded-lg" />
                <Card.Detail
                  className="px-3"
                  title="Lorem ipsum dolor sit amet consectetur."
                  titleclassName="text-[16px] font-medium text-wrap font-[Poppins] text-gray-700 line-clamp-3"
                />
              </Card>
              <Card container="p-0" wrapper="flex flex-col gap-2">
                <Card.Thumbnail src={bg_img} className=" h-32 rounded-lg" />
                <Card.Detail
                  className=""
                  title="Lorem ipsum dolor sit amet consectetur."
                  titleclassName="text-[16px] font-medium text-wrap font-[Poppins] text-gray-700 line-clamp-3"
                />
              </Card>
            </Items>
          </div>
        </div>
      </div>
    </div>
  );
}
