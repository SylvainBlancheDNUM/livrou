import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NavigationMenu from "@/components/NavigationMenu";
import {SessionProvider} from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Livrou",
  description: "Application de TP sur Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <SessionProvider>
        <Header/>
        <NavigationMenu />
        {children}
        <Footer/>
      </SessionProvider>
      </body>
    </html>
  );
}
