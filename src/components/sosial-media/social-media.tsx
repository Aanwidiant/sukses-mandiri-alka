import Link from "next/link";
import Instagram from "@/components/icons/instagram";
import Tiktok from "@/components/icons/tiktok";
import Facebook from "@/components/icons/facebook";

interface SocialMediaProps {
  fillColor: "fill-white" | "fill-dark";
  size?: "small" | "large";
  border?: "border-white" | "border-dark";
}

export default function SocialMedia({ fillColor, size = "small", border = "border-white" }: SocialMediaProps) {
  const iconSize = size === "large" ? "w-8 h-8" : "w-5 h-5";
  const borderSize = size === "large" ? "w-12 h-12" : "w-9 h-9";

  return (
    <div className="flex items-center gap-3">
      <Link href="https://www.instagram.com/suksesmandirialka_jogja/" target="_blank" className={`group flex items-center justify-center border rounded-full ${borderSize} ${border} hover:border-primary hover:bg-primary`}>
        <Instagram className={`${iconSize} ${fillColor} group-hover:fill-white`} />
      </Link>
      <Link href="https://www.tiktok.com/@suksesmandirialka?_t=8mD9QwoTkI6&_r=1 " target="_blank" className={`group flex items-center justify-center border rounded-full ${borderSize} ${border} hover:border-primary hover:bg-primary`}>
        <Tiktok className={`${iconSize} ${fillColor} group-hover:fill-white`} />
      </Link>
      <Link href="https://web.facebook.com/Suksesmandirialkajogja/" target="_blank" className={`group flex items-center justify-center border rounded-full ${borderSize} border-white ${border} hover:bg-primary`}>
        <Facebook className={`${iconSize} ${fillColor} group-hover:fill-white`} />
      </Link>
    </div>
  );
}
