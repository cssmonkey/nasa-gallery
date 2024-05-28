import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import { Inter } from "next/font/google";
import "./globals.css";
import AppHeader from "@/components/AppHeader/AppHeader";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Nasa Image Gallery",
    description: "Nasa Image Gallery created using NextJs",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <AppHeader />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
