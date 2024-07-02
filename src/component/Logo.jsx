import { Children } from "react";
import logo from "../assets/img/logo-berau3.png";

const Logo = (props) => {
  const {
    text,
    addres,
    textclassName = "text-gray-700 font-bold text-[12px] md:text-[20px] font-[Poppins] text-nowrap",
    addresclassName = "text-gray-700 font-medium text-[5px] md:text-[8px] font-[Poppins] tracking-[.35px] md:tracking-[.75px] text-nowrap",
    logoclassName = "h-[24px] md:h-[40px] ",
  } = props;
  return (
    <div className="flex h-fit gap-1 md:justify-between items-end">
      <img className={logoclassName} src={logo} alt="" />
      <div className="flex flex-col">
        <span className={textclassName}>{text}</span>
        <span className={addresclassName}>{addres}</span>
      </div>
    </div>
  );
};

export default Logo;
