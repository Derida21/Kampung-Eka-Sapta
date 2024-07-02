import { useEffect, useState } from "react";
import Table from "./table_layout";

export default function Pekerjaan() {
  const url = "";
  const [pekerjaan, setPekerjaan] = useState({
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    data: [
      {
        id: 1,
        pekerjaan: "PNS",
        totalman: "200",
        totalwoman: "310",
      },
    ],
  });

  const getDataPekerjaan = async () => {
    const response = await fetch(url);
    const dataPekerjaan = await response.json();
    setPekerjaan(dataPekerjaan);
    console.log(pekerjaan);
  };

  useEffect(() => {
    getDataPekerjaan();
  }, []);

  const idString = (num) => {
    const words = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

    return num >= 0 && num < words.length ? words[num] : num.toString();
  };

  return (
    <Table title="Mata Pencaharian" description={pekerjaan.description}>
      <thead>
        <tr>
          <Table.Header text="No." />
          <Table.Header text="Pekerjaan" />
          <Table.Header text="Laki - Laki" />
          <Table.Header text="Perempuan" />
        </tr>
      </thead>
      <tbody>
        {pekerjaan.data.map((item) => {
          return (
            <tr key={item.id}>
              <Table.Body text={idString(item.id)} />
              <Table.Body text={item.pekerjaan} />
              <Table.Body text={item.totalman} />
              <Table.Body text={item.totalwoman} />
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
