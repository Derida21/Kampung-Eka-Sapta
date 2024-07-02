import { Link } from "react-router-dom";

export default function Menu(props) {
  const { text, href, icon } = props;
  return (
    <div className="[&>svg]:w-3 [&>svg]:h-3 [&>svg]:stroke-white flex flex-row items-center gap-2 w-full">
      {icon}
      <Link
        to={href}
        className="text-white text-[10px] md:text-[8px] lg:text-[10px] hover:text-gray-400"
      >
        {text}
      </Link>
    </div>
  );
}
