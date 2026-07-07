export type SocialProofItem = {
  iconSvg: string;
  label: string;
  value: string;
  description: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  image: string;
  badge: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  version?: string;
};

export type BeforeAfterItem = {
  title: string;
  beforeImage: string;
  afterImage: string;
};

export type LandingData = {
  business: {
    name: string;
    category: string;
    city: string;
    phone: string;
    whatsapp: string;
    instagram: string;
    linktree: string;
    maps: string;
    shortDescription: string;
    logo: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    highlightedWord: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    tertiaryCta: string;
    video: string;
    poster: string;
    mediaAlt: string;
  };
  socialProof: SocialProofItem[];
  services: ServiceItem[];
  experience: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    highlights: string[];
  };
  beforeAfter: {
    title: string;
    subtitle: string;
    items: BeforeAfterItem[];
  };
  gallery: {
    title: string;
    subtitle: string;
    images: GalleryImage[];
  };
  instagram: {
    title: string;
    subtitle: string;
    handle: string;
    cta: string;
  };
  location: {
    title: string;
    subtitle: string;
    city: string;
    mapsUrl: string;
    phone: string;
  };
  testimonials: {
    name: string;
    text: string;
    rating: number;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  finalCta: {
    title: string;
    subtitle: string;
    buttons: {
      label: string;
      kind: "primary" | "instagram" | "maps";
      variant?: "primary" | "secondary" | "ghost";
    }[];
  };
  footer: {
    description: string;
    links: {
      label: string;
      href: string;
    }[];
  };
};

export const landingData: LandingData = {
  business: {
    name: "Salão Beauty",
    category: "Salão de Beleza & Estética",
    city: "São Paulo",
    phone: "(11) 99999-9999",
    whatsapp: "5511999999999",
    instagram: "https://www.instagram.com/salaobeauty.demo/",
    linktree: "https://linktr.ee/salaobeauty.demo",
    maps: "https://maps.app.goo.gl/yQ3nC78T2hZ8nPlaceholder",
    shortDescription:
      "Experiência de beleza premium com cortes autorais, mechas personalizadas, produção de eventos e formação profissional em cursos VIP e em grupo.",
    logo: "/beauty/logo.png",
  },
  hero: {
    eyebrow: "EXPERIÊNCIA DE BELEZA PREMIUM EM SÃO PAULO",
    title: "Realce sua identidade com cortes e mechas sob medida",
    highlightedWord: "identidade",
    subtitle:
      "O Salão Beauty reúne sofisticação, técnica avançada e atendimento personalizado para criar produções marcantes e formar profissionais de destaque.",
    primaryCta: "Agendar agora",
    secondaryCta: "Ver localização",
    tertiaryCta: "Conhecer Instagram",
    video: "/beauty/hero-premium.mp4",
    poster: "/beauty/logo.png",
    mediaAlt:
      "Vídeo editorial de beleza premium com tons bronze, champagne e iluminação dourada.",
  },
  socialProof: [
    {
      iconSvg:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><path d="M8.2 7.8 20 19.5"/><path d="M8.2 16.2 14 10.5"/><path d="M14.8 9.7 20 4.5"/></svg>',
      value: "Especialistas",
      label: "Cortes e mechas",
      description:
        "Atendimento focado em cortes autorais e mechas sob medida para valorizar cada cliente.",
    },
    {
      iconSvg:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M7 5h10a2 2 0 0 1 2 2v10l-4-2-4 2-4-2-2 1V7a2 2 0 0 1 2-2Z"/><path d="M9 9h6"/><path d="M9 12h4"/></svg>',
      value: "Agendamento rápido",
      label: "Atendimento direto",
      description:
        "Entre em contato pelo WhatsApp, Instagram, Linktree ou Google Maps de forma simples.",
    },
    {
      iconSvg:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10Z"/><path d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/></svg>',
      value: "Eventos & Noivas",
      label: "Produções especiais",
      description:
        "Cuidado pensado para datas memoráveis com técnica de alta performance e acabamento refinado.",
    },
    {
      iconSvg:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M3 9.5 12 5l9 4.5-9 4.5L3 9.5Z"/><path d="M7 11.5V15c0 1.4 2.24 3 5 3s5-1.6 5-3v-3.5"/><path d="M21 9.5V15"/><path d="M21 15c0 1-.67 1.8-1.5 2.2"/></svg>',
      value: "Cursos e Mentoria",
      label: "Formação profissional",
      description:
        "Cursos práticos para profissionais que buscam aperfeiçoar técnica, postura e atendimento.",
    },
  ],
  services: [
    {
      title: "Cortes personalizados",
      description:
        "Cortes desenhados sob medida para valorizar seu estilo, tipo de fio e formato de rosto.",
      image: "/beauty/service-cut.jpg",
      badge: "Assinatura",
    },
    {
      title: "Mechas personalizadas",
      description:
        "Iluminações planejadas para criar contraste elegante, profundidade e brilho natural.",
      image: "/beauty/service-light.png",
      badge: "Luzes",
    },
    {
      title: "Coloração sofisticada",
      description:
        "Tons elegantes criados com foco na integridade capilar e na harmonia do visual.",
      image: "/beauty/service-color.jpg",
      badge: "Cor",
    },
    {
      title: "Eventos e Noivas",
      description:
        "Preparação e produções marcantes para casamentos, debutantes e ocasiões memoráveis.",
      image: "/beauty/service-event.png",
      badge: "Produção",
    },
    {
      title: "Tratamentos capilares",
      description:
        "Cronogramas e terapias capilares de alta qualidade para recuperar a saúde e a força dos fios.",
      image: "/beauty/service-care.jpg",
      badge: "Terapia",
    },
    {
      title: "Cursos VIP & Workshops",
      description:
        "Mentoria profissional e formação técnica para quem deseja atuar em alto nível.",
      image: "/beauty/service-style.jpg",
      badge: "Formação",
    },
  ],
  experience: {
    eyebrow: "ESSÊNCIA SALÃO BEAUTY",
    title: "Beleza, sofisticação e cuidado em cada detalhe.",
    description:
      "A proposta do Salão Beauty une sensibilidade artística, rigor técnico e atenção cuidadosa para transformar o atendimento tradicional em uma experiência inesquecível de autocuidado.",
    image: "/beauty/experience-editorial-1.jpg",
    highlights: [
      "Especialistas em mechas e cor",
      "Atendimento exclusivo para eventos",
      "Diagnóstico capilar personalizado",
      "Cursos técnicos e profissionalizantes",
    ],
  },
  beforeAfter: {
    title: "Transformações de alto padrão",
    subtitle:
      "Acompanhe alguns resultados reais desenvolvidos pela nossa equipe de estilistas e coloristas.",
    items: [
      {
        title: "Corte com acabamento leve e elegante",
        beforeImage: "/beauty/gallery-1.jpg",
        afterImage: "/beauty/gallery-2.png",
      },
      {
        title: "Mechas para brilho e movimento",
        beforeImage: "/beauty/gallery-3.jpg",
        afterImage: "/beauty/gallery-4.png",
      },
      {
        title: "Produção especial com resultado refinado",
        beforeImage: "/beauty/gallery-5.jpg",
        afterImage: "/beauty/gallery-6.jpg",
      },
    ],
  },
  gallery: {
    title: "Nosso ambiente premium",
    subtitle:
      "Visite a nossa galeria e conheça o espaço planejado para o seu conforto, os bastidores e os acabamentos perfeitos.",
    images: [
      {
        src: "/beauty/gallery-1.jpg",
        alt: "Atendimento focado e diagnóstico personalizado",
        version: "2026-07-07",
      },
      {
        src: "/beauty/gallery-2.png",
        alt: "Finalização leve com brilho e textura refinada",
      },
      {
        src: "/beauty/gallery-3.jpg",
        alt: "Nosso salão com iluminação moderna e acolhedora",
      },
      {
        src: "/beauty/gallery-4.png",
        alt: "Mix de produtos profissionais selecionados",
      },
      {
        src: "/beauty/gallery-5.jpg",
        alt: "Terapia capilar com produtos de alta performance",
      },
      {
        src: "/beauty/gallery-6.jpg",
        alt: "Detalhes do design de corte e acabamento final",
      },
    ],
  },
  instagram: {
    title: "Acompanhe nosso feed e inspirações",
    subtitle:
      "Fique por dentro das novidades, tendências de cortes, técnicas de iluminação e dicas exclusivas de cuidados.",
    handle: "@salaobeauty.demo",
    cta: "Seguir no Instagram",
  },
  location: {
    title: "Encontre o Salão Beauty",
    subtitle:
      "Venha nos visitar. Nosso espaço está localizado em uma região privilegiada, com estacionamento e conforto para o seu atendimento.",
    city: "São Paulo",
    mapsUrl: "https://www.google.com/maps/@-23.2778814,-46.8959286,8.25z",
    phone: "(11) 99999-9999",
  },
  testimonials: [
    {
      name: "Mariana Souza",
      text: "Fui super bem atendida e o resultado das minhas mechas ficou maravilhoso! Recomendo muito toda a equipe do salão.",
      rating: 5,
    },
    {
      name: "Priscilla Fernandes",
      text: "Para o meu grande dia, confiei cabelo e maquiagem aos profissionais do salão. Tudo ficou impecável, no prazo e superou todas as minhas expectativas.",
      rating: 5,
    },
    {
      name: "Vanessa Albuquerque",
      text: "Ambiente encantador, atendimento super atencioso e produtos de excelente qualidade. Sem dúvidas, o melhor salão.",
      rating: 5,
    },
  ],
  faq: [
    {
      question: "Como posso agendar um horário?",
      answer:
        "Você pode agendar de forma prática clicando nos botões de WhatsApp, Instagram ou entrando em contato por telefone para verificar horários disponíveis.",
    },
    {
      question: "O salão realiza produções completas para noivas?",
      answer:
        "Sim! Temos pacotes personalizados para noivas, debutantes e madrinhas, oferecendo testes e acompanhamento com total atenção.",
    },
    {
      question: "Quais são as marcas de produtos utilizadas?",
      answer:
        "Trabalhamos exclusivamente com marcas importadas e nacionais de alta performance (premium) para garantir a saúde e o brilho dos seus fios.",
    },
    {
      question: "Vocês têm cursos de formação profissional?",
      answer:
        "Sim, promovemos cursos VIP práticos e workshops em grupo voltados para o aperfeiçoamento de profissionais em técnicas de cortes e cor.",
    },
  ],
  finalCta: {
    title: "Pronta para vivenciar sua melhor versão?",
    subtitle:
      "Reserve seu momento de beleza e desfrute de um atendimento completo em um ambiente planejado para o seu conforto.",
    buttons: [
      { label: "Agendar agora", kind: "primary", variant: "primary" },
      { label: "Ver Instagram", kind: "instagram", variant: "secondary" },
      { label: "Ver localização", kind: "maps", variant: "ghost" },
    ],
  },
  footer: {
    description:
      "Cortes autorais, mechas personalizadas, produções refinadas e formação profissional com a assinatura de excelência Salão Beauty.",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/salaobeauty.demo/" },
      {
        label: "Linktree",
        href: "https://linktr.ee/salaobeauty.demo",
      },
      { label: "Google Maps", href: "https://maps.app.goo.gl/yQ3nC78T2hZ8nPlaceholder" },
      { label: "Telefone", href: "tel:+5511999999999" },
    ],
  },
};
