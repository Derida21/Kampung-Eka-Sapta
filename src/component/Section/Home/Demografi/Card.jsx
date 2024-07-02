import { Link } from "react-router-dom";

const Icon = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={"z-10 max-h-[82px] bg-white p-5 rounded-2xl"}
    />
  );
};

const Body = (props) => {
  const { title, children, href } = props;
  return (
    <div className="justify-between h-full gap-7 -mt-[30px] px-[30px] pt-[60px] pb-[30px] items-center rounded-lg bg-teal-500 inline-flex flex-col w-full">
      <div className="flex flex-col w-fit justify-between h-full">
        <div className="flex flex-col gap-2">
          <div className="font-semibold font-[Poppins] text-white text-center text-nowrap">
            {title}
          </div>
          <div className="w-full font-[Poppins] text-white text-[12px] text-justify">
            {children}
          </div>
        </div>
        <Link
          to="/Profil/Demografi Desa"
          className="w-full mt-5 font-[Poppins] text-[12px] text-white text-center underline underline-offset-2 hover:text-teal-300"
        >
          Detail
        </Link>
      </div>
    </div>
  );
};

const Card = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-col items-center md:max-lg:w-1/2 md:max-lg:px-3 lg:w-full">
      {children}
    </div>
  );
};

Card.Icon = Icon;
Card.Body = Body;

export default Card;
