import React, { useState } from "react";
import { Kelompok_Umur } from "./Content/Kelompok_Umur";
import { Hubungan_Keluarga } from "./Content/Hubungan_Keluarga";

const Layout = () => {
  const [active, setActive] = useState(null);

  const items = [
    { id: "age", label: "Kelompok Umur", component: <Kelompok_Umur /> },
    { id: "hubungan", label: "Hubungan Keluarga", component: <Hubungan_Keluarga /> },
    { id: "status", label: "Status Perkawinan" },
    { id: "pekerjaan", label: "Pekerjaan" },
    { id: "pendidikan", label: "Pendidikan" },
    { id: "agama", label: "Agama" },
  ];

  const handleClick = (id) => {
    setActive(id);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`py-2 md:rounded-md md:text-nowrap md:justify-start md:p-4 border border-teal-700 w-full flex justify-center items-center font-[Poppins] text-center text-wrap text-[6px] md:text-[10px] lg:text-[12px] cursor-pointer ${
            active === item.id
            ? "bg-teal-700 text-white duration-300 ease-in-out"
            : "bg-white md:hover:bg-teal-700 duration-300 ease-in md:hover:text-white text-teal-700"
            }`}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className="">
        {items.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col gap-2 p-4 ${
              active === item.id ? "block bg-teal-700 duration-200 ease-in-out" : "hidden"
            }`}
          >
            {active === item.id && item.component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layout;
