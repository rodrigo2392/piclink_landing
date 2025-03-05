"use client";
import { motion, AnimatePresence } from "motion/react";
import PricingSection from "./pricing/Pricing";
import { AuroraBackground } from "./AuroraBG";
import Footer from "./footer/Footer";
import { AnimatedTestimonials } from "./Testimonials";
import ContactSection from "./contact/Contact";

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const sections = [
  {
    background: "bg-[#beb2b2] md:bg-[#d2d2d2]",
    component: <PricingSection />,
  },
  {
    background: "bg-[#dbd5d5] md:bg-[#ededed]",
    component: <AnimatedTestimonials testimonials={testimonials} />,
  },
  {
    background: "bg-[#beb2b2] md:bg-[#d2d2d2]",
    component: <ContactSection />,
  },
  {
    background: "bg-[#dbd5d5] md:bg-[#ededed]",
    component: <Footer />,
  },
];

export default function Sections() {
  return (
    <div
      id="main"
      className="w-full relative snap-mandatory snap-both overscroll-contain snap-always snap-center"
    >
      <AnimatePresence>
        {sections.map((el, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              duration: 0.5,
              ease: "easeInOut",
            }}
            className={`${el.background} z-20 md:sticky top-0 h-auto md:h-screen flex flex-col items-center -mt-10 md:mt-0 rounded-t-[40px] md:rounded-none pb-20 md:pb-0 w-full`}
          >
            <AuroraBackground>
              <div className="max-w-[1440px] pt-12 flex flex-col px-6 md:px-0 w-full">
                {el.component}
              </div>
            </AuroraBackground>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
