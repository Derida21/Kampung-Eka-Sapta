import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Dropdown = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location]);

  const handleClick = () => {
    if (!isDesktop) {
      setIsOpen(!isOpen);
    }
  };

  const handleMouseEnter = () => {
    if (isDesktop) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (isDesktop) {
      setIsOpen(false);
    }
  };

  const renderOptions = () => {
    return options.map((option, index) => (
      <li key={index}>
        <Link
          to={option.href}
          className="py-2 block hover:text-teal-700 items-center justify-center "
        >
          {option.label}
        </Link>
      </li>
    ));
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="[&>svg]:w-3 [&>svg]:h-3 [&>svg]:lg:hidden flex w-full justify-between items-center py-3 lg:items-center md:pr-[40px] lg:px-3 xl:px-5 font-[Poppins] font-semibold
        text-[10px] md:text-[12px] lg:text-[12px] text-gray-700 hover:text-teal-700 text-nowrap"
      >
        <span>{label}</span>
        {isOpen ? <IconChevronUp /> : <IconChevronDown />}
      </button>
      <ul
        className={`lg:absolute lg:bg-white block lg:items-center lg:justify-center lg:rounded-lg lg:shadow-md font-[Poppins] text-[8px] md:text-[10px] lg:px-5 lg:py-3 text-nowrap transition-all duration-500 ease-in-out ${
          isOpen ? "" : "hidden"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {renderOptions()}
      </ul>
    </div>
  );
};

export default Dropdown;
