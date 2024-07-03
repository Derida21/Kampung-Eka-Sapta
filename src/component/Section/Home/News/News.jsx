import { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import axios from "axios";

const News = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("http://nurul-huda.org/api/berita");
      console.log(response.data.data.data);
      setData(response.data.data.data);
    } catch (error) {
      if (!error.response) {
        console.error("Network error:", error);
      } else {
        console.error("Error response:", error.response);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col w-full md:rounded-3xl drop-shadow-xl gap-5 md:gap-0 shadow-gray-800 bg-white py-2 md:px-5 md:pt-0 md:pb-10 lg:px-10 rounded-lg lg:rounded-3xl">
      {data.map((news, index) => (
        <Main
          key={news.slug}
          index={index}
          judul={news.judul}
          thumbnail={news.thumbnail}
          isi={news.isi}
          author={news.author.nama}
        />
      ))}
      {/* List Berita */}
      <div className="flex flex-col gap-3 border-t-[2px] border-gray-400 px-2 pt-3 lg:px-0 md:border-none">
        <div className="flex items-end justify-between ">
          <p className="font-[Poppins] text-[12px] font-semibold text-gray-700">
            Baca Juga
          </p>
          <Link
            to="https://tailwindcss.com/docs/installation"
            className="font-[Poppins] text-[10px] font-light underline text-gray-700"
          >
            Lihat Semua
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:px-0">
          {/* <List berita_lainnya={news.berita_lainnya} /> */}
        </div>
      </div>
    </div>
  );
};

function Main({ judul, thumbnail, isi, author, index }) {
  const reverse = index % 2 === 0;
  return (
    <>
      <Card
        wrapper={
          reverse
            ? `flex flex-col md:flex-row-reverse gap-3 md:gap-0 md:justify-between lg:gap-[30px]`
            : `flex flex-col md:flex-row gap-3 md:gap-0 md:justify-between lg:gap-[30px]`
        }
      >
        <Card.Thumbnail src={thumbnail} />
        <div className="flex flex-col px-2 lg:px-0 gap-[10px] md:w-1/2">
          <div className="flex flex-col gap-2 md:justify-between h-full ">
            <div className="flex justify-between items-center">
              <Card.Date date={""} />
              <Card.Author author={author} />
            </div>
            <Card.Detail title={judul} detail="Baca Selengkapnya">
              {isi}
            </Card.Detail>
          </div>
        </div>
      </Card>
    </>
  );
}

function List({ news }) {
  return (
    <>
      {defaultnews.map((item, index) => (
        <Card
          key={index}
          container="md:border border-gray-300 rounded lg:rounded-md"
          wrapper="w-full flex flex-row md:flex-col gap-2 md:gap-0 md:justify-between"
          href={item.href}
        >
          <Card.Thumbnail className="w-1/2 md:w-full " src={item.thumbnail} />
          <div className="w-full flex flex-col justify-center gap-[10px] md:py-2 lg:py-3">
            <div className="flex flex-col gap-3 md:gap-2 md:px-2">
              <div className="flex justify-between items-center">
                <Card.Date
                  className="[&>svg]:h-2 [&>svg]:w-2 flex items-center gap-[2px] lg:gap-1 [&>svg]:lg:h-4 [&>svg]:lg:w-4 "
                  date={item.date}
                  dateclassName="text-gray-500 text-[6px] font-medium font-[Poppins] lg:text-[10px] h-2 lg:h-3"
                />
                <Card.Author
                  className=" flex items-center gap-[2px] lg:gap-1 [&>svg]:lg:h-4 "
                  author={item.author}
                  authorclassName="text-gray-500 text-[6px] font-medium font-[Poppins] lg:text-[10px] "
                />
              </div>
              <Card.Detail
                className=""
                title={item.title}
                titleclassName="text-[8px] lg:text-[10px] xl:text-[12px] font-[Poppins] line-clamp-2 font-semibold text-gray-800"
              />
            </div>
          </div>
        </Card>
      ))}
    </>
  );
}

export default News;
