"use client";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Sidebar from "@/components/sidebar/sidebar";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
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
        <Header isSidebarOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen((prev) => !prev)} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(false)} />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
