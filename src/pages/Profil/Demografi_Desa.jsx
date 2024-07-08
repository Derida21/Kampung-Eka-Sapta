import Layout from "../../component/Section/Profil/Demografi/Layout";

const DemografisDesa = () => {
  return (
    <section className="px-5 md:px-[60px] lg:px-[80px] xl:px-[160px] pb-5">
      <div className="flex flex-col gap-1 pt-14 md:pt-[120px] lg:pt-[120px]">
        <h1 className="font-[Poppins] text-[12px] md:text-[24px] font-semibold text-teal-700">
          Demografi Desa
        </h1>
        <p className="font-[Poppins] text-[10px] text-gray-500 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nobis
          iste voluptatum dicta autem excepturi culpa eum. Veritatis suscipit
          ducimus dignissimos nemo, quo ratione exercitationem possimus nostrum
          minima cupiditate modi. Nulla quisquam illo aut quia consequuntur
          praesentium exercitationem deleniti minus. Aperiam excepturi eius quod
          voluptates ipsa incidunt expedita dolorum dolore perferendis, rerum
          nulla debitis odio officia iure! Et, officia adipisci? Fugiat quas ut
          tenetur sit eum consectetur expedita dicta exercitationem repellendus
          quibusdam nemo eos eius excepturi optio libero facere modi, rem nihil
          distinctio illo accusantium ab architecto. Odit, ipsum eos.
        </p>
      </div>
      <div className="flex flex-col mt-2">
        <Layout />
      </div>
    </section>
  );
};

function Thumbnail({ thumbnail, alt, description }) {
  return (
    <Layout className="flex flex-col gap-2">
      <Layout.Thumbnail title="Demografi Desa" src={thumbnail} alt={alt} />
      <Layout.Description>{description}</Layout.Description>
    </Layout>
  );
}

export default DemografisDesa;
