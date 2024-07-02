import { useEffect, useState } from "react";
import Table from "./table_layout";

export default function Kesejahteraan() {
  const url = "";
  const [kesejahteraan, setKesejahteraan] = useState({
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    data: [
      {
        id: 1,
        klasifikasi: "Penduduk Miskin",
        total: "200",
        detail: "-",
      },
    ],
  });

  const getDataKesejahteraan = async () => {
    const response = await fetch(url);
    const dataKesejahteraan = await response.json();
    setKesejahteraan(dataKesejahteraan);
    console.log(kesejahteraan);
  };

  useEffect(() => {
    getDataKesejahteraan();
  }, []);

  const idString = (num) => {
    const words = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

    return num >= 0 && num < words.length ? words[num] : num.toString();
  };

  return (
    <Table title="Kesejahteraan Sosial" description={kesejahteraan.description}>
      <thead>
        <tr>
          <Table.Header text="No." />
          <Table.Header text="Status Sosial" />
          <Table.Header text="Jumlah" />
          <Table.Header text="Keterangan" />
        </tr>
      </thead>
      <tbody>
        {kesejahteraan.data.map((item) => {
          return (
            <tr key={item.id}>
              <Table.Body text={idString(item.id)} />
              <Table.Body text={item.klasifikasi} />
              <Table.Body text={item.total} />
              <Table.Body text={item.detail} />
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
