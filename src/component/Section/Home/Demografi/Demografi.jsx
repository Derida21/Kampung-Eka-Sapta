import { useEffect, useState } from "react";
import Card from "./Card";

const defaultDemografi = [
  {
    id: 1,
    icon: "src/assets/icon/Icon_Penduduk.png",
    title: "Jumlah Penduduk",
    description:
      "Lorem ipsum dolor sit amet consectetur. Consequat ac cras blandit leo quam leo auctor. Massa pretium blandit viverra ornare quam id amet morbia. ",
    href: "/Profil/Demografi Desa",
  },
  {
    id: 2,
    icon: "src/assets/icon/Icon_Agama.png",
    title: "Keragaman Agama",
    description:
      "Lorem ipsum dolor sit amet consectetur. Consequat ac cras blandit leo quam leo auctor. Massa pretium blandit viverra ornare quam id amet morbia. ",
    href: "/Profil/Demografi Desa",
  },
  {
    id: 3,
    icon: "src/assets/icon/Icon_Pekerjaan.png",
    title: "Mata Pencaharian",
    description:
      "Lorem ipsum dolor sit amet consectetur. Consequat ac cras blandit leo quam leo auctor. Massa pretium blandit viverra ornare quam id amet morbia. ",
    href: "/Profil/Demografi Desa",
  },
  {
    id: 4,
    icon: "src/assets/icon/Icon_sosial.png",
    title: "Keadaan Sosial",
    description:
      "Lorem ipsum dolor sit amet consectetur. Consequat ac cras blandit leo quam leo auctor. Massa pretium blandit viverra ornare quam id amet morbia. ",
    href: "/Profil/Demografi Desa",
  },
];

const Demografi = () => {
  const url = "";
  const [demografi, setDemografi] = useState(defaultDemografi);

  const getDataDemografi = async () => {
    const response = await fetch(url);
    const dataDemografi = await response.json();
    setDemografi(dataDemografi);
    console.log(demografi);
  };

  useEffect(() => {
    getDataDemografi();
  }, []);

  return (
    <div className="block md:max-lg:flex md:max-lg:flex-wrap lg:flex lg:gap-3 py-5">
      {demografi.map((demografi) => {
        return (
          <CardDemografi
            key={demografi.id}
            Icon={demografi.icon}
            title={demografi.title}
            description={demografi.description}
            href={demografi.detail}
          />
        );
      })}
    </div>
  );
};

function CardDemografi(props) {
  return (
    <Card>
      <Card.Icon src={props.Icon} />
      <Card.Body href={props.href} title={props.title}>
        {props.description}
      </Card.Body>
    </Card>
  );
}

export default Demografi;
