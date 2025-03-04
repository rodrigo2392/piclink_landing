"use client";
import Link from "next/link";
import localFont from "next/font/local";
import Writer from "./Writer";
import { motion } from "motion/react";

const FamilyNormal = localFont({ src: "../app/family-light.woff2" });

export default function Header() {
  return (
    <>
      <header className="justify-center bg-[url(/bg-mobile.jpg)] md:bg-[url('/bg-desktop.avif')] flex px-10 flex-col md:flex-row sticky top-0 bg-cover bg-fixed bg-center bg-no-repeat bg-black bg-opacity-10">
        <div className="text-center max-w-[1440px] mt-auto z-10 items-center md:items-start gap-2 w-full h-screen md:h-screen flex justify-start md:justify-center flex-col pt-24">
          <h1 className={`text-8xl font-bold ${FamilyNormal.className}`}>
            Piclink
          </h1>
          <div className="max-w-72 text-left lg:max-w-none">
            <Writer
              duration={0.5}
              words="Es mejor servicio para entrega digital de fotografías."
            />
          </div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.5,
            }}
          >
            <Link
              href="/"
              className={` bg-black text-white px-4 py-2 rounded-lg`}
            >
              Registrarse
            </Link>
          </motion.div>
        </div>

        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="scroll"></div>
        </div>
      </header>
    </>
  );
}
