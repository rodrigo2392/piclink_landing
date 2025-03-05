import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "@/components/Navbar";
const Styrenea = localFont({ src: "./styrenea.woff2" });

export const metadata: Metadata = {
  title: "Piclink",
  description: "Piclink - El mejor servicio de entrega digital de fotografía",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`overscroll-none m-auto ${Styrenea.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
