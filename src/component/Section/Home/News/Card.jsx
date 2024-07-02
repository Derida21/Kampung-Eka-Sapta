import { IconCalendar, IconCalendarMonth } from "@tabler/icons-react";
import { TfiWrite } from "react-icons/tfi";

const Thumbnail = (props) => {
  const { src, alt, className = "w-auto md:w-1/2 px-2 lg:px-0" } = props;
  return <img className={className} src={src} alt={alt} />;
};

const Date = (props) => {
  const {
    className = "[&>svg]:h-4 [&>svg]:w-4 flex items-center gap-1",
    date,
    dateclassName = "text-gray-500 text-[10px] font-medium font-[Poppins] h-3",
  } = props;
  return (
    <div className={className}>
      <IconCalendarMonth className="stroke-gray-400" />
      <div className={dateclassName}>{date}</div>
    </div>
  );
};

const Author = (props) => {
  const {
    className = "[&>svg]:h-4 flex items-center gap-2",
    svg = "h-3 w-[10px] stroke-[1px] stroke-gray-400",
    author,
    authorclassName = "text-gray-500 text-[10px] font-medium font-[Poppins]",
  } = props;
  return (
    <div className={className}>
      <TfiWrite className={svg} />
      <div className={authorclassName}>{author}</div>
    </div>
  );
};

const Detail = (props) => {
  const {
    className = "flex flex-col gap-2 md:justify-between md:h-full",
    title,
    titleclassName = "text-[12px] lg:text-[16px] xl:text-[20px] font-[Poppins] line-clamp-2 font-semibold text-gray-800",
    descriptionclassName = "w-full line-clamp-5 text-justify text-gray-500 text-[10px] lg:text-[12px] xl:text-[16px] font-normal font-[Poppins]",
    children,
    href,
    detail,
  } = props;
  return (
    <div className={className}>
      <div className="flex flex-col gap-2">
        <h1 className={titleclassName}>{title}</h1>
        <p className={descriptionclassName}>{children}</p>
      </div>
      <a
        href={href}
        className="text-teal-700 text-[10px] xl:text-[12px] font-medium font-[Poppins] hover:text-teal-500 underline underline-offset-2"
      >
        {detail}
      </a>
    </div>
  );
};

function Card(props) {
  const {
    container = "flex flex-col md:py-10 md:border-b-2 md:border-gray-400",
    wrapper = "flex flex-col md:flex-row gap-3 md:gap-0 md:justify-between lg:gap-[30px]",
    href,
  } = props;
  return (
    <div className={container} href={href}>
      <div className={wrapper}>{props.children}</div>
    </div>
  );
}

Card.Thumbnail = Thumbnail;
Card.Date = Date;
Card.Author = Author;
Card.Detail = Detail;

export default Card;
