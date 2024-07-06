const Kontak = () => {
  return (
    <div className="flex flex-col gap-3">
      <span className="w-1/2 text-white font-[Poppins] text-[12px] md:text-[10px] lg:text-[12px] font-medium">
        Kontak
      </span>
      <div className="flex flex-col w-full gap-3 xl:gap-5">
        <Layout
          icon={<IconMailFilled className="fill-white" />}
          text="fahrulakbar@gmail.com"
          href="/#"
        />
        <Layout
          icon={<IconBrandWhatsapp />}
          text="+62 883 8583 9098"
          href="/#"
        />
        <Layout
          icon={<IconBrandWhatsapp />}
          text="+62 883 8583 9098"
          href="/#"
        />
      </div>
    </div>
  );
};
