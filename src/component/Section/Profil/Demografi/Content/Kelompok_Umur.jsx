import { useEffect, useRef, useState } from "react";
import Table from "../Table";
import axios from "axios";
import Chart from "chart.js/auto";

export const Kelompok_Umur = () => {
  const [data, setData] = useState([]);
  const chartRef = useRef(null);
  const canvasRef = useRef(null);

  const getData = async () => {
    try {
      const response = await axios.get(
        "http://nurul-huda.org/api/demografi/umur"
      );
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

  useEffect(() => {
    if (data.length > 0) {
      // Ensure previous chart instance is destroyed
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      // Prepare data for the chart
      const labels = data.map((data) => data["Kelompok Umur"]);
      const maleData = data.map((data) => data["Laki-laki"]);
      const femaleData = data.map((data) => data["Perempuan"]);

      // Initialize new chart
      const ctx = canvasRef.current.getContext("2d");
      chartRef.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Laki-laki",
              data: maleData,
              backgroundColor: "rgba(54, 162, 235, 0.6)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
            {
              label: "Perempuan",
              data: femaleData,
              backgroundColor: "rgba(255, 99, 132, 0.6)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Jumlah Penduduk",
              },
            },
            x: {
              title: {
                display: true,
                text: "Kelompok Umur",
              },
            },
          },
        },
      });
    }

    return () => {
      // Cleanup chart instance on unmount
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data]);

  return (
    <div className="flex flex-col justify-center gap-5">
      <canvas
        ref={canvasRef}
        id="myChart"
        className="w-full md:max-w-[500px] lg:max-w-full lg:max-h-[600px] bg-white p-2 rounded-md "
      ></canvas>
      <Table>
        <thead>
          <tr>
            <Table.Header>Kelompok Umur</Table.Header>
            <Table.Header>Laki-laki</Table.Header>
            <Table.Header>Perempuan</Table.Header>
            <Table.Header>Jumlah</Table.Header>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <Table.Body>{item["Kelompok Umur"]}</Table.Body>
              <Table.Body>{item["Laki-laki"]}</Table.Body>
              <Table.Body>{item["Perempuan"]}</Table.Body>
              <Table.Body>{item.Jumlah}</Table.Body>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
