import axios from "axios";
import React, { useState, useEffect } from "react";

const LembagaDesa = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://nurul-huda.org/api/");
      if (response.data.success) setData(response.data.data.berita_utama);

      console.log(response);
    } catch (error) {
      if (!error.response) {
        console.error("Network error:", error);
      } else {
        console.error("Error response:", error.response.data);
      }
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="pt-20">
      {data.map((item) => {})}
      <button></button>
    </div>
  );
};

export default LembagaDesa;
