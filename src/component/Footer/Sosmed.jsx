import axios from "axios";
import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sosmed = () => {
  const [sosmed, setSosmed] = useState(null);

  const getSosmed = async () => {
    try {
      const response = await axios.get("http://nurul-huda.org/api/profil");
      console.log(response);
      setSosmed(response.data.data.sosial_media);
    } catch (error) {
      if (!error.response) {
        console.error("Network error:", error);
      } else {
        console.error("Error response:", error.response.data);
      }
    }
  };

  useEffect(() => {
    getSosmed();
  }, []);

  useEffect(() => {
    console.log(sosmed);
  }, [sosmed]);

  return (
    <>
      {sosmed && (
        <div className="flex flex-row gap-3 w-full">
          {sosmed.fb && (
            <Link to={sosmed.fb}>
              <FaFacebook className="h-6 w-6 fill-white" />
            </Link>
          )}
          {sosmed.ig && (
            <Link to={sosmed.ig}>
              <FaInstagram className="h-6 w-6 fill-white" />
            </Link>
          )}
          {sosmed.tiktok && (
            <Link to={sosmed.tiktok}>
              <FaTiktok className="h-6 w-6 fill-white" />
            </Link>
          )}
          {sosmed.youtube && (
            <Link to={sosmed.youtube}>
              <FaYoutube className="h-6 w-6 fill-white" />
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export default Sosmed;
