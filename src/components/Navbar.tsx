"use client";
import Link from "next/link";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import localFont from "next/font/local";

const FamilyNormal = localFont({ src: "../app/family-light.woff2" });

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <AnimatePresence>
        {visible ? (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
            className={`z-[60] sticky top-0 bottom-0 bg-black h-screen w-full  justify-center items-center`}
          >
            <div className="absolute top-4 right-6 text-white">
              {visible ? (
                <motion.button
                  exit={{ scale: 0, opacity: 0 }}
                  onClick={() => setVisible(false)}
                >
                  <IconX size={30} />
                </motion.button>
              ) : null}
            </div>
            {visible && (
              <motion.ul
                exit={{ opacity: 0 }}
                className="text-white text-center flex gap-5 flex-col pt-56 items-center h-screen"
              >
                <motion.li
                  key={1}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    duration: 1,
                  }}
                >
                  Contacto
                </motion.li>
                <motion.li
                  key={2}
                  initial={{ opacity: 0, y: 200 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    duration: 1,
                  }}
                >
                  Preguntas frecuentes
                </motion.li>
                <motion.li
                  key={3}
                  initial={{ opacity: 0, y: 300 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    duration: 1,
                  }}
                >
                  Registrarme
                </motion.li>
              </motion.ul>
            )}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <nav className="w-full px-6 py-4 fixed top-0 flex justify-center z-50">
        <div className="w-full flex justify-between max-w-[1440px]">
          <Link
            className={`text-black ${FamilyNormal.className}  font-bold text-2xl`}
            href="/"
          >
            Piclink
          </Link>
          <AnimatePresence>
            {!visible ? (
              <motion.button
                key="motion-button"
                exit={{ scale: 0, opacity: 0 }}
                onClick={() => setVisible(true)}
              >
                <IconMenu2 size={30} color={"#000"} />
              </motion.button>
            ) : null}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}
