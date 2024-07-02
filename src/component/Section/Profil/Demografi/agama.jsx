import { useEffect, useState } from "react";
import Table from "./table_layout";

export default function Agama() {
  const url = "";
  const [agama, setAgama] = useState({
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    data: [
      {
        id: 1,
        agama: "Islam",
        totalman: "200",
        totalwoman: "310",
      },
    ],
  });

  const getDataAgama = async () => {
    const response = await fetch(url);
    const dataAgama = await response.json();
    setAgama(dataAgama);
    console.log(agama);
  };

  useEffect(() => {
    getDataAgama();
  }, []);

  const idString = (num) => {
    const words = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

    return num >= 0 && num < words.length ? words[num] : num.toString();
  };

  return (
    <Table title="Keragaman Agama" description={agama.description}>
      <thead>
        <tr>
          <Table.Header text="No." />
          <Table.Header text="Agama" />
          <Table.Header text="Laki - Laki" />
          <Table.Header text="Perempuan" />
        </tr>
      </thead>
      <tbody>
        {agama.data.map((item) => {
          return (
            <tr key={item.id}>
              <Table.Body text={idString(item.id)} />
              <Table.Body text={item.agama} />
              <Table.Body text={item.totalman} />
              <Table.Body text={item.totalwoman} />
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
