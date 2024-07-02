import { useEffect, useState } from "react";
import Table from "./table_layout";

export default function Penduduk() {
  const url = "";
  const [penduduk, setPenduduk] = useState({
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    data: [
      {
        id: 1,
        golongan: "Balita",
        totalman: "200",
        totalwoman: "310",
      },
    ],
  });

  const getDataPenduduk = async () => {
    const response = await fetch(url);
    const dataPenduduk = await response.json();
    setPenduduk(dataPenduduk);
    console.log(penduduk);
  };

  useEffect(() => {
    getDataPenduduk();
  }, []);

  const idString = (num) => {
    const words = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

    return num >= 0 && num < words.length ? words[num] : num.toString();
  };

  return (
    <Table title="Jumlah Penduduk" description={penduduk.description}>
      <thead>
        <tr>
          <Table.Header text="No." />
          <Table.Header text="Kelompok Usia" />
          <Table.Header text="Laki - Laki" />
          <Table.Header text="Perempuan" />
        </tr>
      </thead>
      <tbody>
        {penduduk.data.map((item) => {
          return (
            <tr key={item.id}>
              <Table.Body text={idString(item.id)} />
              <Table.Body text={item.golongan} />
              <Table.Body text={item.totalman} />
              <Table.Body text={item.totalwoman} />
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
