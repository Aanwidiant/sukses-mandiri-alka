import Link from "next/link";
import Instagram from "@/components/icons/instagram";
import Tiktok from "@/components/icons/tiktok";
import Facebook from "@/components/icons/facebook";

interface SocialMediaProps {
  fillColor: "fill-white" | "fill-dark";
}

export default function SocialMedia({ fillColor }: SocialMediaProps) {
  return (
    <div className="flex items-center gap-3">
      <Link href="https://www.instagram.com/suksesmandirialka_jogja/" target="_blank" className="group flex items-center justify-center border rounded-full w-9 h-9 border-white hover:border-primary hover:bg-primary">
        <Instagram className={`w-5 h-5 ${fillColor} group-hover:fill-white`} />
      </Link>
      <Link href="https://www.tiktok.com/@suksesmandirialka?_t=8mD9QwoTkI6&_r=1 " target="_blank" className="group flex items-center justify-center border rounded-full w-9 h-9 border-white hover:border-primary hover:bg-primary">
        <Tiktok className={`w-5 h-5 ${fillColor} group-hover:fill-white`} />
      </Link>
      <Link href="https://web.facebook.com/Suksesmandirialkajogja/" target="_blank" className="group flex items-center justify-center border rounded-full w-9 h-9 border-white hover:border-primary hover:bg-primary">
        <Facebook className={`w-5 h-5 ${fillColor} group-hover:fill-white`} />
      </Link>
    </div>
  );
}
