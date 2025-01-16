import type { Metadata } from 'next'
import "./globals.css";
import ClientLayout from '@/components/layouts/client-layout';
import React from "react";

export const metadata: Metadata = {
    title: 'My Next.js App',
    description: 'A description of your app for SEO purposes',
    icons: {
        icon: [
            { url: '/image/logo/logo.svg', type: 'image/svg+xml' },
            { url: '/image/logo/logo.png', type: 'image/png' }
        ]
    }
}

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
        <ClientLayout>
            {children}
        </ClientLayout>
        </body>
        </html>
    );
}