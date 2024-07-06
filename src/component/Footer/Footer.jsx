import {
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconMailFilled,
} from "@tabler/icons-react";
import Logo from "../Logo";
import Map from "./Map";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Menu from "./Menu/Layout";
import Sosmed from "./Sosmed";
import Layout from "./Menu/Layout";

export default function Footer() {
  return (
    <div className="flex flex-col">
      <Map />
      <div className="flex flex-col pt-5 px-5 md:px-[60px] md:pt-10 lg:gap-[50px] lg:px-20 xl:px-[160px] lg:pt-20 bg-teal-700">
        <div className="flex flex-col pb-10 md:flex-row gap-3 md:gap-0 md:justify-between ">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1 lg:gap-2">
              <Logo
                logoclassName="h-[42px] lg:h-[62px] xl:h-[72px]"
                text="Kampung Eka Sapta"
                addres="Kec. Talisayan Kab. Berau Kalimantan Timur"
                textclassName="text-white font-bold text-[22px] md:text-[20px] lg:text-[32px] xl:text-[36px] font-[Poppins] text-nowrap"
                addresclassName="text-white text-[10px] md:text-[8px] lg:text-[12px] xl:text-[16px] font-[Poppins] tracking-[.3px] md:tracking-[.75px] lg:tracking-[1.7px] xl:tracking-[.6px]  text-nowrap"
              />
              <span className="text-white text-[6px] md:max-lg:text-[5px] lg:text-[8px] xl:text-[10px] font-[Poppins] tracking-wide md:tracking-widest lg:tracking-wider xl:tracking-normal ">
                Jl. Pulau Dewata RT.001 Kampung Eka Sapta Kec. Talisayan Kab.
                Berau Kalimantan Timur
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-nowrap text-white font-[Poppins] text-[12px]">
                Media Sosial:
              </span>
              <Sosmed />
            </div>
          </div>
          <div className="flex flex-col gap-5 md:gap-3 lg:gap-5 xl:gap-10 md:flex-row lg:pt-2">
            {/* kontak */}
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
            {/* Pelayanan */}
            <div className="flex flex-col gap-3">
              <span className="w-1/2 text-white font-[Poppins] text-[12px] md:text-[10px] lg:text-[12px] font-medium">
                Pelayanan
              </span>
              <div className="flex flex-col w-full gap-3 xl:gap-5">
                <Layout text="Surat Keterangan Bekum Menikah" href="/#" />
                <Layout text="Surat Keterangan Kematian" href="/#" />
                <Layout text="Surat Pengantar" href="/#" />
              </div>
            </div>
            {/* Lainnya*/}
            <div className="flex flex-col gap-3">
              <span className="w-1/2 text-white font-[Poppins] text-[12px] md:text-[10px] lg:text-[12px] font-medium text-nowrap">
                Kunjungi Juga
              </span>
              <div className="flex flex-col w-full gap-3 xl:gap-5">
                <Menu text="Surat Keterangan Bekum Menikah" href="/#" />
                <Menu text="Surat Keterangan Kematian" href="/#" />
                <Menu text="Surat Pengantar" href="/#" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center py-5 border-t-[1px] border-white">
          <span className="text-[8px] text-white font-[Poppins]">
            Powered by Kalteam
          </span>
        </div>
      </div>
    </div>
  );
}
