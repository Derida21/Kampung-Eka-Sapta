function Table(props) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col gap-1">
        <h1 className="font-[Poppins] text-[12px] md:text-[24px] font-semibold text-teal-700">
          {props.title}
        </h1>
        <p className="font-[Poppins] text-[10px] md:text-[14px] lg:text-[16px] text-gray-500 text-justify">
          {props.description}
        </p>
      </div>
      <table className="table-auto border-separate">{props.children}</table>
    </div>
  );
}

function Header(props) {
  return (
    <th className="border h-6 md:h-10 border-slate-100 font-[Poppins] text-[8px] md:text-[16px] text-slate-100 bg-teal-400">
      {props.text}
    </th>
  );
}

function Body(props) {
  return (
    <td className="border border-slate-4 text-[8px] md:text-[16px] text-gray-500 font-medium text-center font-[Poppins] py-1">
      {props.text}
    </td>
  );
}

Table.Header = Header;
Table.Body = Body;

export default Table;
