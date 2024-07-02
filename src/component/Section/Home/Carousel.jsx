import {
  IconCircleArrowLeftFilled,
  IconCircleArrowRightFilled,
} from "@tabler/icons-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const defaultCarousel = [
  {
    id: 1,
    judul: "Berita 1",
    isi: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Commodi, non voluptate sapiente et vitae voluptatem? Perferendis necessitatibus quam numquam, impedit quo qui nesciunt incidunt. Ab quos officia ad sint quasi Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, non voluptate sapiente et vitae voluptatem? Perferendis necessitatibus quam numquam, impedit quo qui nesciunt incidunt. Ab quos officia ad sint quasi",
    thumbnail: "src/assets/img/Slide1.png",
  },
  {
    id: 2,
    judul: "Berita 2",
    isi: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Commodi, non voluptate sapiente et vitae voluptatem? Perferendis necessitatibus quam numquam, impedit quo qui nesciunt incidunt. Ab quos officia ad sint quasi Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, non voluptate sapiente et vitae voluptatem? Perferendis necessitatibus quam numquam, impedit quo qui  nesciunt incidunt. Ab quos officia ad sint quasi",
    thumbnail: "bg-gray-300",
  },
  {
    id: 3,
    judul: "Berita 3",
    isi: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Commodi, non voluptate sapiente et vitae voluptatem? Perferendis necessitatibus quam numquam, impedit quo qui nesciunt incidunt. Ab quos officia ad sint quasi Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    thumbnail: "bg-gray-400",
  },
];

const Carousel = () => {
  const [slides, setSlides] = useState(defaultCarousel);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch("");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data.length === 0) {
          console.warn("No data available");
        } else {
          setSlides(data);
        }
      } catch (error) {
        console.log("Error fetching slides:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex, slides.length]);

  const Next = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const Prev = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg md:rounded-2xl h-[185px] md:h-[350px] lg:h-[500px] xl:h-[600px] shadow drop-shadow-lg">
      <div className="relativ h-64">
        {slides.map((berita_utama, index) => (
          <div
            key={berita_utama.id}
            className={`absolute flex items-end justify-end inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            } `}
            style={{
              backgroundImage: `url(${berita_utama.thumbnail})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Link
              to={berita_utama.href}
              className="absolute bottom-6 md:bottom-8 flex flex-col w-full px-3 md:px-10"
            >
              <h2 className="text-white font-[Poppins] font-semibold text-[12px] md:text-[16px] lg:text-[36px]">
                {berita_utama.judul}
              </h2>
              <p className="text-white text-[8px] md:text-[10px] lg:text-[16px] font-[Poppins] text-justify line-clamp-3 md:overflow-hidden  ">
                {berita_utama.isi}
              </p>
            </Link>
          </div>
        ))}
      </div>

      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded"
        onClick={Prev}
      >
        <IconCircleArrowLeftFilled className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8" />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2  text-white p-2 rounded"
        onClick={Next}
      >
        <IconCircleArrowRightFilled className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8" />
      </button>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
