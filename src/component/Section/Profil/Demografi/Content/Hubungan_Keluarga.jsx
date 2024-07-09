import { useEffect, useState } from "react";
import Table from "../Table";
import axios from "axios";

export const Hubungan_Keluarga = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "http://nurul-huda.org/api/demografi/hubungan-keluarga"
      );
      console.log(response.data.data);
      setData(response.data.data);
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
    <Table>
      <thead>
        <tr>
          <Table.Header>Hubungan</Table.Header>
          <Table.Header>Kelompok Umur</Table.Header>
          <Table.Header>Laki-laki</Table.Header>
          <Table.Header>Perempuan</Table.Header>
          <Table.Header>Jumlah</Table.Header>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <Table.Body>{item.Hubungan}</Table.Body>
            <Table.Body>{item["Kelompok umur"]}</Table.Body>
            <Table.Body>{item["Laki-Laki"]}</Table.Body>
            <Table.Body>{item["Perempuan"]}</Table.Body>
            <Table.Body>{item.Jumlah}</Table.Body>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
