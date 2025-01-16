import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "next/head";
import type { Viewport } from 'next'

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width'
}
export const metadata: Metadata = {
  title: "WorldShaker",
  description: "A digital advertising agency",

};
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display:"swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
      <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
        <Navbar/> 
        <main>
          {children}
        </main>
        
        <Footer/> 
        </div>
      </body>
    </html>
  );
}
