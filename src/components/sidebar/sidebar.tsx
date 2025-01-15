import Navigasi from "@/components/navigasi/nav";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  return (
    <div>
      <div
        className={`fixed top-24 right-0 z-40 h-full w-5/12 md:hidden bg-primary transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:static lg:transform-none lg:opacity-100 lg:w-full lg:h-auto`}
      >
        <div className="px-4">
          <Navigasi layout="sidebar" toggleSidebar={toggleSidebar} />
        </div>
      </div>
      {isOpen && <div className="fixed inset-0 z-30 lg:hidden" onClick={toggleSidebar} />}
    </div>
  );
}
