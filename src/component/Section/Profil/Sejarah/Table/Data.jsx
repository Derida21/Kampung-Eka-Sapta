import { useEffect, useState } from "react";
import Layout from "./Layout";

const defaultdata = [
  {
    id: 1,
    nama: "Luuk De Jong",
    masajabatan: "0000 - 0000",
  },
];

const Data = () => {
  const url = "";
  const [datakades, setdataKades] = useState(defaultdata);

  const getDataKades = async () => {
    const response = await fetch(url);
    const DataKades = await response.json();
    setdataKades(DataKades);
    console.log(datakades);
  };

  useEffect(() => {
    getDataKades();
  }, []);

  return (
    <tbody>
      {datakades.map((data) => {
        return (
          <DataKades
            key={data.id}
            number={data.id}
            name={data.nama}
            duration={data.masajabatan}
          />
        );
      })}
    </tbody>
  );
};

const DataKades = (props) => {
  return (
    <tr key={props.id}>
      <td className="border border-slate-100 shadow-sm text-[10px] md:text-[16px] text-gray-500 font-medium text-center font-[Poppins] py-1 ">
        {props.number}
      </td>
      <td className="border border-slate-100 shadow-sm text-[10px] md:text-[16px] text-gray-500 font-medium text-center font-[Poppins] py-1 ">
        {props.name}
      </td>
      <td className="border border-slate-100 shadow-sm text-[10px] md:text-[16px] text-gray-500 font-medium text-center font-[Poppins] py-1 ">
        {props.duration}
      </td>
    </tr>
  );
};

export default Data;
