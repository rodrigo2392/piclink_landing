"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  ImageIcon,
  Upload,
  Download,
  Users,
  Shield,
  /*TrendingUp,
  Globe,*/
  Clock,
  Share2,
  Eye,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { useLanguage } from "@/lib/i18n/language-context";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white overflow-hidden">
      <SiteHeader />
      <HeroSection />
      <FeaturesSection />
      <StatsWorkflowSection />
      <PricingSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

function StatsWorkflowSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Parallax effects
  const { scrollY } = useScroll();
  const statsY = useTransform(scrollY, [1500, 3000], [0, -100]);
  const floatingY = useTransform(scrollY, [1500, 3000], [0, -200]);

  // Platform statistics
  /*const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "50,000+",
      label: "Fotógrafos Activos",
      gradient: "from-gray-600 to-gray-800",
    },
    {
      icon: <ImageIcon className="h-8 w-8" />,
      number: "2.5M+",
      label: "Fotos Entregadas",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      number: "99.9%",
      label: "Tiempo de Actividad",
      gradient: "from-gray-500 to-gray-700",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      number: "300%",
      label: "Entrega Más Rápida",
      gradient: "from-gray-800 to-black",
    },
  ];*/

  // Workflow steps
  const workflowSteps = [
    {
      step: "01",
      icon: <Upload className="h-6 w-6" />,
      title: "Sube tu Trabajo",
      description:
        "Arrastra y suelta sesiones fotográficas completas con nuestro cargador masivo ultrarrápido",
      gradient: "from-gray-600 to-gray-800",
    },
    {
      step: "02",
      icon: <Eye className="h-6 w-6" />,
      title: "Organiza y Previsualiza",
      description:
        "Auto-organiza fotos y crea galerías impresionantes con vistas previas de un clic",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      step: "03",
      icon: <Share2 className="h-6 w-6" />,
      title: "Comparte con Clientes",
      description:
        "Envía galerías seguras y con marca personalizada con controles de acceso personalizados",
      gradient: "from-gray-500 to-gray-700",
    },
    {
      step: "04",
      icon: <Download className="h-6 w-6" />,
      title: "Descargas de Clientes",
      description:
        "Los clientes pueden descargar imágenes en alta resolución al instante con protección de marca de agua",
      gradient: "from-gray-800 to-black",
    },
  ];

  return (
    <section
      className="py-16 sm:py-20 md:py-24 bg-white dark:bg-black relative overflow-hidden"
      id="how"
      ref={ref}
    >
      {/* Parallax floating elements */}
      <motion.div
        style={{ y: floatingY }}
        className="absolute top-10 right-10 w-24 h-24 bg-gray-100/20 dark:bg-gray-900/20 rounded-full blur-2xl"
      />
      <motion.div
        style={{ y: statsY }}
        className="absolute bottom-10 left-10 w-32 h-32 bg-gray-200/10 dark:bg-gray-800/10 rounded-full blur-xl"
      />

      <div className="container px-4 sm:px-6 lg:px-8 relative">
        {/* Platform Statistics */}
        {/*<motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-900 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <TrendingUp className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            <span className="text-gray-600 dark:text-gray-400">
              Confiado por Profesionales
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Rendimiento de la Plataforma
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-16">
            Únete a miles de fotógrafos que confían en nuestra plataforma para
            sus entregas más importantes
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 30, scale: 0.9 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="relative bg-white dark:bg-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />
                  <CardContent className="p-8 text-center">
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} text-white mb-4 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <motion.div
                      className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white"
                      initial={{ scale: 1 }}
                      animate={isInView ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                    >
                      {stat.number}
                    </motion.div>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>*/}

        {/* Workflow Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.6 }}
            className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-900 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Clock className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            <span className="text-gray-600 dark:text-gray-400">
              Flujo de Trabajo Simple
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Cómo Funciona
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            De la carga a la entrega en solo 4 pasos simples. Optimiza tu flujo
            de trabajo fotográfico hoy.
          </p>
        </motion.div>

        {/* Workflow Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
              className="relative group"
            >
              {/* Connection Line */}
              {index < workflowSteps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-700 z-0">
                  <motion.div
                    className="h-full bg-gradient-to-r from-gray-600 to-gray-400 dark:from-gray-400 dark:to-gray-600"
                    initial={{ width: "0%" }}
                    animate={isInView ? { width: "100%" } : { width: "0%" }}
                    transition={{ duration: 1, delay: index * 0.2 + 1.5 }}
                  />
                </div>
              )}

              <Card className="relative bg-white dark:bg-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden h-full">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                <CardContent className="p-8 text-center relative z-10">
                  {/* Step Number */}
                  <motion.div
                    className="absolute z-30 -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-gray-800 to-black dark:from-gray-200 dark:to-white text-white dark:text-black rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.step}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} text-white mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t } = useLanguage();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-desktop.avif"
          alt="Photography background"
          fill
          className="object-cover opacity-50 dark:opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black "></div>
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="bg-blue-600  px-4 py-1 rounded-full text-sm font-medium text-white">
              {t("hero.badge")}
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t("hero.title")} <br className="hidden md:block" />
            <span className="text-white">{t("hero.titleHighlight")}</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-200 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-gray-800 text-white border-gray-800 border"
            >
              {t("hero.cta")} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-gray-800 text-white border-gray-800 border "
            >
              {t("hero.secondaryCta")}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <span className="text-lg">{t("hero.scroll")}</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          >
            <ArrowRight className="h-10 w-10 rotate-90" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const features = [
    {
      icon: <ImageIcon className="h-10 w-10 text-blue-500" />,
      title: t("features.items.highResolution.title"),
      description: t("features.items.highResolution.description"),
    },
    {
      icon: <User className="h-10 w-10 text-blue-500" />,
      title: t("features.items.videoStreaming.title"),
      description: t("features.items.videoStreaming.description"),
    },
    {
      icon: <Upload className="h-10 w-10 text-blue-500" />,
      title: t("features.items.bulkUploading.title"),
      description: t("features.items.bulkUploading.description"),
    },
    {
      icon: <Download className="h-10 w-10 text-blue-500" />,
      title: t("features.items.clientDownloads.title"),
      description: t("features.items.clientDownloads.description"),
    },
    {
      icon: <Users className="h-10 w-10 text-blue-500" />,
      title: t("features.items.accessControl.title"),
      description: t("features.items.accessControl.description"),
    },
    {
      icon: <Shield className="h-10 w-10 text-blue-500" />,
      title: t("features.items.contentProtection.title"),
      description: t("features.items.contentProtection.description"),
    },
  ];

  return (
    <section
      id="features"
      ref={ref}
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900"
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("features.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("features.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 backdrop-blur-sm hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const plans = [
    {
      name: t("pricing.plans.starter.name"),
      price: "$100",
      description: t("pricing.plans.starter.description"),
      features: t("pricing.plans.starter.features"),
    },
    {
      name: t("pricing.plans.professional.name"),
      price: "$300",
      description: t("pricing.plans.professional.description"),
      features: t("pricing.plans.professional.features"),
      popular: true,
    },
    {
      name: t("pricing.plans.studio.name"),
      price: "$1200",
      description: t("pricing.plans.studio.description"),
      features: t("pricing.plans.studio.features"),
    },
  ];

  return (
    <section
      id="pricing"
      ref={ref}
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black"
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("pricing.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card
                className={`h-full ${
                  plan.popular
                    ? "border-blue-500 bg-white dark:bg-gray-900/70"
                    : "pt-10 bg-white/30 dark:bg-gray-900/30 border-gray-200 dark:border-gray-800"
                }`}
              >
                <CardContent className="p-6">
                  {plan.popular && (
                    <div className="bg-blue-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-2 rounded-full inline-block mb-4">
                      {t("pricing.mostPopular")}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {t("pricing.perMonth")}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {plan.description}
                  </p>
                  <ul className="space-y-3 mb-6 h-60">
                    {(plan.features as unknown as string[]).map(
                      (feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      )
                    )}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                    }`}
                  >
                    {t("pricing.getStarted")}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: t("testimonials.items.wedding.quote"),
      author: t("testimonials.items.wedding.author"),
      role: t("testimonials.items.wedding.role"),
    },
    {
      quote: t("testimonials.items.commercial.quote"),
      author: t("testimonials.items.commercial.author"),
      role: t("testimonials.items.commercial.role"),
    },
    {
      quote: t("testimonials.items.fashion.quote"),
      author: t("testimonials.items.fashion.author"),
      role: t("testimonials.items.fashion.role"),
    },
  ];

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-12 sm:py-16 md:py-20 bg-white dark:bg-black"
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-white/30 dark:bg-gray-900/30 border-gray-200 dark:border-gray-800 h-full">
                <CardContent className="p-6">
                  <div className="mb-4 text-blue-500">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-lg mb-6 italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      ref={ref}
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-purple-50 dark:from-black dark:to-blue-900"
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            {t("cta.subtitle")}
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {t("cta.primaryButton")}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">PickLink</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t("footer.product")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#features"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  {t("footer.features")}
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  {t("footer.pricing")}
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  {t("footer.testimonials")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  {t("footer.faq")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t("footer.company")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  {t("footer.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  {t("footer.blog")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  {t("footer.careers")}
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
