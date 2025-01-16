import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/layouts/client-layout";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://sukses-mandiri-alka.vercel.app"),
  title: "Sukses Mandiri Alka",
  description: "Website UMKM Sukses Mandiri untuk Aluminium dan Kaca",
  keywords: ["aluminium", "kaca", "umkm"],
  verification: {
    google: "PZluAmRpWGTONUDm8SXAbz90rFzL3Z2IkidGKUOFr14",
  },
  openGraph: {
    title: "Sukses Mandiri Alka",
    description: "Website UMKM Sukses Mandiri untuk Aluminium dan Kaca",
    url: "https://sukses-mandiri-alka.vercel.app",
    siteName: "Sukses Mandiri Alka",
    images: ["/image/logo/logo.svg"],
  },
  icons: {
    icon: [
      { url: "/image/logo/logo.svg", type: "image/svg+xml" },
      { url: "/image/logo/logo.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: "url('/image/background/bg.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
