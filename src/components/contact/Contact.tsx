"use client";
import React, { useState } from "react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  return (
    <section className=" dark:bg-gray-900 z-40">
      <div className="py-2 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-4">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-6 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            ¿Tienes dudas?
          </h2>
          <p className="mb-5 font-light text-gray-700 sm:text-xl dark:text-gray-400">
            Puedes enviarnos tus dudas o comentarios
          </p>
        </div>
        <div className="flex flex-col mb-6 gap-2">
          <label>Email: </label>
          <input
            type="email"
            className="border border-gray-200 py-2 rounded-lg px-2"
            placeholder="nombre@gmail.com"
          />
        </div>
        <div className="flex flex-col mb-6  gap-2">
          <label>Nombre: </label>
          <input
            type="text"
            className="border border-gray-200 py-2 rounded-lg px-2"
            placeholder="Juan Pérez"
          />
        </div>
        <div className="flex flex-col mb-6  gap-2">
          <label>Dudas: </label>
          <textarea
            placeholder="¿Cómo puedo registrarme?"
            className="border resize-none border-gray-200 py-2 rounded-lg px-2"
          />
        </div>
        <div className="flex flex-col mb-6  gap-2">
          <button
            onClick={() => setSent(true)}
            className="w-full px-4 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Enviar
          </button>
        </div>
        {sent && (
          <div className="text-center pt-4">
            <p className="text-sm">Tu mensaje ha sido enviado.</p>
            <p className="text-sm">
              Nos pondremos en contacto contigo a la brevedad.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
