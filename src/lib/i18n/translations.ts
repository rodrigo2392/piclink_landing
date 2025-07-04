export type Language = "en" | "es";

export type Translations = {
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    cta: string;
    secondaryCta: string;
    scroll: string;
  };
  features: {
    title: string;
    subtitle: string;
    items: {
      highResolution: {
        title: string;
        description: string;
      };
      videoStreaming: {
        title: string;
        description: string;
      };
      bulkUploading: {
        title: string;
        description: string;
      };
      clientDownloads: {
        title: string;
        description: string;
      };
      accessControl: {
        title: string;
        description: string;
      };
      contentProtection: {
        title: string;
        description: string;
      };
    };
  };
  gallery: {
    title: string;
    subtitle: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    mostPopular: string;
    perMonth: string;
    getStarted: string;
    plans: {
      starter: {
        name: string;
        description: string;
        features: string[];
      };
      professional: {
        name: string;
        description: string;
        features: string[];
      };
      studio: {
        name: string;
        description: string;
        features: string[];
      };
    };
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: {
      wedding: {
        quote: string;
        author: string;
        role: string;
      };
      commercial: {
        quote: string;
        author: string;
        role: string;
      };
      fashion: {
        quote: string;
        author: string;
        role: string;
      };
    };
  };
  cta: {
    title: string;
    subtitle: string;
    primaryButton: string;
    secondaryButton: string;
    noCreditCard: string;
  };
  footer: {
    description: string;
    product: string;
    features: string;
    pricing: string;
    testimonials: string;
    faq: string;
    company: string;
    about: string;
    blog: string;
    careers: string;
    contact: string;
    copyright: string;
  };
  nav: {
    features: string;
    pricing: string;
    testimonials: string;
    contact: string;
    toggleTheme: string;
    language: string;
  };
};

export const translations: Record<Language, Translations> = {
  en: {
    hero: {
      badge: "Launching Soon",
      title: "Deliver Beautiful Media",
      titleHighlight: "Without Limits",
      description:
        "The ultimate platform for photographers to store, manage, and deliver high-quality multimedia content to clients with lightning-fast speed.",
      cta: "Start Free Trial",
      secondaryCta: "View Demo",
      scroll: "Scroll to explore",
    },
    features: {
      title: "Powerful Features for Photographers",
      subtitle:
        "Everything you need to manage and deliver your multimedia content efficiently",
      items: {
        highResolution: {
          title: "High-Resolution Delivery",
          description:
            "Deliver full-resolution images without compression or quality loss.",
        },
        videoStreaming: {
          title: "Video Streaming",
          description:
            "Adaptive streaming for videos of any size with minimal buffering.",
        },
        bulkUploading: {
          title: "Bulk Uploading",
          description:
            "Upload entire photoshoots in seconds with our drag-and-drop interface.",
        },
        clientDownloads: {
          title: "Client Downloads",
          description:
            "Let clients download individual files or entire galleries with a click.",
        },
        accessControl: {
          title: "Client Access Control",
          description:
            "Set permissions and access levels for different clients and projects.",
        },
        contentProtection: {
          title: "Content Protection",
          description:
            "Watermarking, download restrictions, and expiring links to protect your work.",
        },
      },
    },
    gallery: {
      title: "Showcase Your Work Beautifully",
      subtitle:
        "Create stunning galleries that load instantly and look amazing on any device",
    },
    pricing: {
      title: "Simple, Transparent Pricing",
      subtitle:
        "Choose the plan that fits your needs. All plans include a 14-day free trial.",
      mostPopular: "Most Popular",
      perMonth: "/month",
      getStarted: "Get Started",
      plans: {
        starter: {
          name: "Starter",
          description: "Perfect for beginners and hobbyists",
          features: [
            "10GB storage space",
            "100GB monthly bandwidth",
            "Up to 10 client galleries",
            "Basic analytics",
            "Email support",
          ],
        },
        professional: {
          name: "Professional",
          description: "For serious photographers with growing needs",
          features: [
            "100GB storage space",
            "1TB monthly bandwidth",
            "Unlimited client galleries",
            "Advanced analytics",
            "Priority support",
            "Custom branding",
          ],
        },
        studio: {
          name: "Studio",
          description: "For photography studios and teams",
          features: [
            "500GB storage space",
            "5TB monthly bandwidth",
            "Team collaboration tools",
            "Client CRM integration",
            "24/7 priority support",
            "Custom domain",
            "API access",
          ],
        },
      },
    },
    testimonials: {
      title: "Loved by Photographers",
      subtitle:
        "See what professional photographers are saying about our platform",
      items: {
        wedding: {
          quote:
            "This platform has completely transformed how I deliver photos to my wedding clients. The galleries load instantly and look stunning.",
          author: "Sarah Johnson",
          role: "Wedding Photographer",
        },
        commercial: {
          quote:
            "The video delivery feature is a game-changer. My commercial clients are impressed with how quickly they can access and review footage.",
          author: "Michael Chen",
          role: "Commercial Photographer",
        },
        fashion: {
          quote:
            "I've tried many portfolio platforms, but none offer the speed and reliability I get with this service. Worth every penny.",
          author: "Elena Rodriguez",
          role: "Fashion Photographer",
        },
      },
    },
    cta: {
      title: "Ready to Transform Your Media Delivery?",
      subtitle:
        "Join thousands of photographers who are delivering stunning multimedia experiences to their clients.",
      primaryButton: "Start Your Free Trial",
      secondaryButton: "Schedule a Demo",
      noCreditCard: "No credit card required. 14-day free trial.",
    },
    footer: {
      description:
        "The ultimate platform for photographers to store, manage, and deliver high-quality multimedia content to clients.",
      product: "Product",
      features: "Features",
      pricing: "Pricing",
      testimonials: "Testimonials",
      faq: "FAQ",
      company: "Company",
      about: "About",
      blog: "Blog",
      careers: "Careers",
      contact: "Contact",
      copyright: "© 2025 PickLink. All rights reserved.",
    },
    nav: {
      features: "Features",
      pricing: "Pricing",
      testimonials: "Testimonials",
      contact: "Contact",
      toggleTheme: "Toggle theme",
      language: "Language",
    },
  },
  es: {
    hero: {
      badge: "Próximamente",
      title: "Entrega Contenido Multimedia",
      titleHighlight: "Profesional",
      description:
        "La plataforma definitiva para que los fotógrafos almacenen, gestionen y entreguen contenido multimedia de alta calidad a sus clientes con una velocidad ultrarrápida.",
      cta: "Iniciar Prueba Gratuita",
      secondaryCta: "Ver Demostración",
      scroll: "Desplázate para explorar",
    },
    features: {
      title: "Potentes Funciones para Fotógrafos",
      subtitle:
        "Todo lo que necesitas para gestionar y entregar tu contenido multimedia de manera eficiente",
      items: {
        highResolution: {
          title: "Entrega en Alta Resolución",
          description:
            "Entrega imágenes en resolución completa sin compresión ni pérdida de calidad.",
        },
        videoStreaming: {
          title: "Portafolio de trabajo",
          description:
            "Crea tu portafolio y compártelo para atraer a tus clientes.",
        },
        bulkUploading: {
          title: "Carga Masiva",
          description:
            "Sube sesiones fotográficas completas en segundos con nuestra interfaz de arrastrar y soltar.",
        },
        clientDownloads: {
          title: "Descargas para Clientes",
          description:
            "Permite a los clientes descargar archivos individuales o galerías completas con un clic.",
        },
        accessControl: {
          title: "Control de Acceso",
          description:
            "Establece permisos y niveles de acceso para diferentes clientes y proyectos.",
        },
        contentProtection: {
          title: "Protección de Contenido",
          description:
            "Marcas de agua, restricciones de descarga y enlaces caducables para proteger tu trabajo.",
        },
      },
    },
    gallery: {
      title: "Muestra tu Trabajo de Forma Espectacular",
      subtitle:
        "Crea galerías impresionantes que se cargan al instante y se ven increíbles en cualquier dispositivo",
    },
    pricing: {
      title: "Precios Simples y Transparentes",
      subtitle:
        "Elige el plan que se adapte a tus necesidades. Todos los planes incluyen una prueba gratuita de 14 días.",
      mostPopular: "Más Popular",
      perMonth: "/mes",
      getStarted: "Comenzar",
      plans: {
        starter: {
          name: "Inicial",
          description: "Perfecto para principiantes y aficionados",
          features: [
            "10GB de almacenamiento",
            "100GB de ancho de banda mensual",
            "Hasta 10 galerías de clientes",
            "Análisis básicos",
            "Soporte por correo electrónico",
          ],
        },
        professional: {
          name: "Profesional",
          description: "Para fotógrafos serios con necesidades crecientes",
          features: [
            "100GB de almacenamiento",
            "1TB de ancho de banda mensual",
            "Galerías de clientes ilimitadas",
            "Análisis avanzados",
            "Soporte prioritario",
            "Marca personalizada",
          ],
        },
        studio: {
          name: "Estudio",
          description: "Para estudios fotográficos y equipos",
          features: [
            "500GB de almacenamiento",
            "5TB de ancho de banda mensual",
            "Herramientas de colaboración en equipo",
            "Integración con CRM de clientes",
            "Soporte prioritario 24/7",
            "Dominio personalizado",
            "Acceso a API",
          ],
        },
      },
    },
    testimonials: {
      title: "Amado por Fotógrafos",
      subtitle:
        "Mira lo que dicen los fotógrafos profesionales sobre nuestra plataforma",
      items: {
        wedding: {
          quote:
            "Esta plataforma ha transformado completamente la forma en que entrego fotos a mis clientes de bodas. Las galerías se cargan al instante y se ven impresionantes.",
          author: "Sarah Johnson",
          role: "Fotógrafa de Bodas",
        },
        commercial: {
          quote:
            "La función de entrega de video es revolucionaria. Mis clientes comerciales están impresionados con la rapidez con la que pueden acceder y revisar el material.",
          author: "Michael Chen",
          role: "Fotógrafo Comercial",
        },
        fashion: {
          quote:
            "He probado muchas plataformas de portafolio, pero ninguna ofrece la velocidad y fiabilidad que obtengo con este servicio. Vale cada centavo.",
          author: "Elena Rodríguez",
          role: "Fotógrafa de Moda",
        },
      },
    },
    cta: {
      title: "¿Listo para Transformar tu Entrega de Contenido?",
      subtitle:
        "Únete a miles de fotógrafos que están ofreciendo experiencias multimedia impresionantes a sus clientes.",
      primaryButton: "Inicia tu Prueba Gratuita",
      secondaryButton: "Programa una Demostración",
      noCreditCard:
        "No se requiere tarjeta de crédito. Prueba gratuita de 14 días.",
    },
    footer: {
      description:
        "La plataforma definitiva para que los fotógrafos almacenen, gestionen y entreguen contenido multimedia de alta calidad a sus clientes.",
      product: "Producto",
      features: "Características",
      pricing: "Precios",
      testimonials: "Testimonios",
      faq: "Preguntas Frecuentes",
      company: "Empresa",
      about: "Acerca de",
      blog: "Blog",
      careers: "Carreras",
      contact: "Contacto",
      copyright: "© 2025 PickLink. Todos los derechos reservados.",
    },
    nav: {
      features: "Características",
      pricing: "Precios",
      testimonials: "Testimonios",
      contact: "Contacto",
      toggleTheme: "Cambiar tema",
      language: "Idioma",
    },
  },
};
