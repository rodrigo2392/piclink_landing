import React from "react";

const plans = [
  {
    title: "Gratis",
    description:
      "Prueba nuestro producto gratis de por vida, sin cargos extra u ocultos.",
    cost: 0,
    benfits: [
      "10 álbumes o 5 GB de espacio",
      "Sin cargos ocultos",
      "Actualizaciones: Gratis",
    ],
  },
  {
    title: "Semi Profesional",
    description:
      "La mejor opción para fotógrafos con trabajos casuales y pocos eventos.",
    cost: 100,
    benfits: [
      "Álbumes ilimitados",
      "20 GB de espacio",
      "Actualizaciones: Gratis",
    ],
  },
  {
    title: "Profesional",
    description:
      "La mejor opción para fotógrafos con trabajos profesionales y varios eventos.",
    cost: 300,
    benfits: [
      "Álbumes ilimitados",
      "200 GB de espacio",
      "Actualizaciones: Gratis",
      "Soporte técnico prioritario",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className=" dark:bg-gray-900 z-40">
      <div className="py-2 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-4">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-6 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Diseñado por y para fotógrafos
          </h2>
          <p className="mb-5 font-light text-gray-700 sm:text-xl dark:text-gray-400">
            Piclink es una plataforma hecha con cariño, por y para amantes de la
            fotografía.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {plans.map((el) => (
            <React.Fragment key={el.title}>
              <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-gray-50 rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-4 text-2xl font-semibold">{el.title}</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  {el.description}
                </p>
                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">
                    ${el.cost}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">/mes</span>
                </div>
                <ul role="list" className="mb-8 space-y-4 text-left h-40">
                  {el.benfits.map((el) => (
                    <li className="flex items-center space-x-3" key={el}>
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>{el}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full px-4 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  Empezar
                </button>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-end pt-6 text-center px-6 md:px-0">
        <span>* Los precios corresponden a la moneda mexicana MXN</span>
      </div>
    </section>
  );
}
