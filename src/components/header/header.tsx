import Navigasi from "@/components/navigasi/nav";
import Logo from "@/components/icons/logo";
import Link from "next/link";
import Hamburger from "@/components/icons/hamburger";

interface HeaderProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export default function Header({ isSidebarOpen, toggleSidebar }: HeaderProps) {
  return (
    <header className=" fixed top-0 left-0 z-10 flex items-center w-full shadow-sm bg-primary shadow-secondry">
      <div className="container">
        <div className="flex items-center justify-between w-full h-24">
          <div className="px-4 flex gap-x-4 items-center">
            <Logo className="h-8 lg:h-10" />
            <Link href="/" className="uppercase text-lg lg:text-2xl italic font-semibold text-white">
              Sukses Mandiri
            </Link>
          </div>
          <div className="items-center p-4 hidden md:flex">
            <Navigasi layout="header" />
          </div>
          <div className="h-full items-center flex md:hidden p-4">
            <Hamburger isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          </div>
        </div>
      </div>
    </header>
  );
}
