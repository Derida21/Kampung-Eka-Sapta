import { useState } from "react";
import ImgOrganiasi from "../../assets/img/Organisasi.jpg";
import pejabat from "../../assets/img/Kades.png";

export default function Struktur() {
  const [selectedJabatan, setSelectedJabatan] = useState(null);
  const jabatanList = [
    {
      id: 1,
      name: "Jabatan 1",
      image: pejabat,
      description: "Deskripsi untuk Jabatan 1",
    },
    {
      id: 2,
      name: "Jabatan 2",
      image: pejabat,
      description: "Deskripsi untuk Jabatan 2",
    },
    {
      id: 3,
      name: "Jabatan 3",
      image: "image3.jpg",
      description: "Deskripsi untuk Jabatan 3",
    },
  ];

  const defaultImage = ImgOrganiasi;

  return (
    <section className="px-5 md:px-[60px] lg:px-[80px] xl:px-[160px]">
      <div className="flex flex-col items-center gap-3 lg:gap-6 pt-16 pb-5 md:pt-[120px] md:pb-[40px] lg:pt-[120px] lg:pb-20">
        <h1 className="font-[Poppins] text-[16px] md:text-[24px] font-semibold text-teal-700">
          Struktur Organisasi
        </h1>
        <img src={defaultImage} alt="Default" className="w-full md:hidden" />
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-1/4 p-4">
            <ul className="space-y-2">
              {jabatanList.map((jabatan) => (
                <li
                  key={jabatan.id}
                  className="cursor-pointer"
                  onClick={() => setSelectedJabatan(jabatan)}
                >
                  {jabatan.name}
                </li>
              ))}
            </ul>
          </div>
          <div className=" p-4 w-full">
            {selectedJabatan ? (
              <>
                <img
                  src={selectedJabatan.image}
                  alt={selectedJabatan.name}
                  className="w-full h-auto mb-4"
                />
                <p>{selectedJabatan.description}</p>
              </>
            ) : (
              <img
                src={defaultImage}
                alt="Default"
                className="w-full hidden md:flex "
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
