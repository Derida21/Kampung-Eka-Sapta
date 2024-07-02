import { useEffect, useState } from "react";

export const Batas = () => {
  const url = "";
  const [batas, setBatas] = useState({
    data: [
      {
        id: 1,
        direction: "Sebelah Utara",
        detail: "lorem ipsum",
      },
      {
        id: 2,
        direction: "Sebelah Selatan",
        detail: "lorem ipsum",
      },
    ],
  });

  const getDataBatas = async () => {
    const response = await fetch(url);
    const dataBatas = await response.json();
    setBatas(dataBatas);
    console.log(batas);
  };

  useEffect(() => {
    getDataBatas();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-[Poppins] text-[12px] md:text-[24px] font-semibold text-teal-700">
        Batas Wilayah
      </h1>
      <div className="flex flex-col border-l-2 pl-3 md:pl-6 border-teal-700 gap-2">
        <table className="table-auto">
          <thead>
            {batas.data.map((item) => {
              return (
                <tr
                  key={item.id}
                  className="font-[Poppins] text-gray-500 text-[10px] md:text-[14px] lg:text-[16px] align-top h-5 md:h-14"
                >
                  <td className="w-1/2 md:w-1/3">{item.direction}</td>
                  <td className="">{item.detail}</td>
                </tr>
              );
            })}
          </thead>
        </table>
      </div>
    </div>
  );
};
