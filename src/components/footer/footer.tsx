import Navigasi from "@/components/navigasi/nav";
import Logo from "@/components/icons/logo";
import Link from "next/link";
import SocialMedia from "@/components/sosial-media/social-media";
import Whatsapp from "@/components/icons/whatsapp";
import Mail from "@/components/icons/mail";
import Location from "@/components/icons/location";

export default function Footer() {
  return (
    <footer className="pt-10 bg-dark  text-white ">
      <div className="container flex flex-wrap">
        <div className="w-full px-4 mb-10 font-medium md:w-1/3">
          <h2 className="mb-5 flex gap-x-3 items-center">
            <Logo className="h-8 lg:h-10" />
            <Link href="/" className="uppercase text-2xl italic font-semibold text-white">
              Sukses Mandiri
            </Link>
          </h2>
          <div className="flex flex-col gap-y-2.5">
            <h3 className="text-xl font-semibold">Hubungi Kami</h3>
            <div className="flex gap-x-3 text-base font-normal">
              <Whatsapp className="fill-white w-6 h-6" />
              <p>0813-9340-5038</p>
            </div>
            <div className="flex gap-x-3 text-base font-normal">
              <Mail className="fill-white w-6 h-6" />
              <p>suksesmandiri.alka@gmail.com</p>
            </div>
            <div className="flex gap-x-3">
              <Location className="stroke-white stroke-2 w-6 h-6" />
              <div className="flex flex-col gap-y-2 text-base font-normal">
                <p>Jl. Pengasih-Wates, Kedung Galih RT 10/ RW 03</p>
                <p>Pengasih, Kulon Progo</p>
                <p>Yogyakarta</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 mb-10 md:w-1/3">
          <h3 className="mb-5 text-xl font-semibold">Ikuti Kami</h3>
          <SocialMedia fillColor="fill-white" />
        </div>
        <div className="w-full px-4 mb-10 md:w-1/3">
          <h3 className="flex flex-col mb-5 text-xl font-semibold">Tautan Menu</h3>
          <Navigasi layout="footer" />
        </div>
        <div className="w-full p-5 border-t border-gray">
          <p className="text-xs font-medium text-center text-gray">
            Copyright &#169; 2025 All rights reserved | created by <span className="font-bold text-white">Sukses Mandiri Alka</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
