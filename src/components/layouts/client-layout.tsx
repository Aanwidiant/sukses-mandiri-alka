'use client';

import React, { useState } from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Sidebar from "@/components/sidebar/sidebar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <Header
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={() => setSidebarOpen((prev) => !prev)}
            />
            <Sidebar
                isOpen={isSidebarOpen}
                toggleSidebar={() => setSidebarOpen(false)}
            />
            <div>{children}</div>
            <Footer />
        </>
    );
}