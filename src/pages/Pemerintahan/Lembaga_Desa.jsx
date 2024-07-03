import axios from "axios";
import React, { useState, useEffect } from "react";

const LembagaDesa = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://nurul-huda.org/api/profil");
      if (response.data.success) setData(response.data.data.visi_misi);

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
    fetchData();
  }, []);

  return (
    <div className="pt-20">
      {data && (
        <>
          <h1>{data.misi}</h1>
          <h1>{data.visi}</h1>
        </>
      )}
    </div>
  );
};

export default LembagaDesa;
