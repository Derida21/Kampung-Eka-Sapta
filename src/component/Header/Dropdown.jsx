import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Dropdown = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const [openSubOptions, setOpenSubOptions] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenSubOptions(null);
  }, [location]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (index) => {
    if (isDesktop) {
      setOpenSubOptions(index);
    }
  };

  const handleMouseLeave = () => {
    if (isDesktop) {
      setOpenSubOptions(null);
    }
  };

  const handleSubOptionClick = (index) => {
    if (!isDesktop) {
      setOpenSubOptions(openSubOptions === index ? null : index);
    }
  };

  const renderOptions = () => {
    return options.map((option, index) => (
      <li
        key={index}
        className=" relative group"
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      >
        <div
          onClick={() => handleSubOptionClick(index)}
          className="flex justify-between py-2 md:max-lg:pr-10 lg:px-5 lg:block cursor-pointer hover:text-teal-700 items-center "
        >
          {option.label}
          {option.subOptions && (
            <span className="">
              {openSubOptions === index ? (
                <IconChevronUp className="w-3 h-3 lg:hidden" />
              ) : (
                <IconChevronDown className="w-3 h-3 lg:hidden" />
              )}
            </span>
          )}
        </div>
        {option.subOptions && openSubOptions === index && (
          <ul
            className={`lg:absolute lg:left-full top-0 rounded-md bg-white lg:border text-gray-500 border-gray-300 lg:shadow-lg ${
              isDesktop ? "block" : ""
            }`}
          >
            {option.subOptions.map((subOption, subIndex) => (
              <li key={subIndex} className="relative">
                <Link
                  to={subOption.href}
                  className="py-2 px-2 lg:px-4 block hover:text-teal-700"
                >
                  {subOption.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    ));
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={handleClick}
        className="[&>svg]:w-3 [&>svg]:h-3 [&>svg]:lg:hidden flex w-full justify-between items-center py-3 lg:items-center md:pr-[40px] lg:px-3 xl:px-5 font-[Poppins] font-semibold text-[10px] md:text-[12px] lg:text-[12px] text-gray-700 hover:text-teal-700 text-nowrap"
      >
        <span>{label}</span>
        {isOpen ? <IconChevronUp /> : <IconChevronDown />}
      </button>
      <ul
        className={`lg:absolute lg:bg-white block lg:items-center lg:justify-center lg:rounded-lg lg:shadow-md font-[Poppins] text-[8px] md:text-[10px]  lg:py-3 text-nowrap transition-all duration-500 ease-in-out ${
          isOpen ? "" : "hidden"
        }`}
      >
        {renderOptions()}
      </ul>
    </div>
  );
};

export default Dropdown;
