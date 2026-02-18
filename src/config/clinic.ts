export const clinic = {
  name: "Peluquería isabella",
  logo: "/images/logo.png",
  tagline: "Tu peluquería de confianza en La Roda",
  description: "Peluquería Isabella es tu salón de belleza de referencia en La Roda, Albacete. Con una valoración de 4.9 estrellas, Isabella ofrece cortes personalizados, peinados espectaculares y un trato excepcional para toda la familia. Especializada en cortes infantiles con paciencia y cariño, y en conseguir exactamente el look que deseas. Formación continua y pasión por el trabajo en cada servicio.",
  colors: {
    primary: "#a78964",
    secondary: "#32291e",
    accent: "#ba956a",
    neutral: "#f8f6f3"
  },
  phone: "659 85 04 96",
  whatsapp: "+34659850496",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de estética.",
  email: "",
  address: {
    street: "C. Hermanos Quintero, 21, 02630 La Roda, Albacete, España",
    city: "La Roda",
    province: "Albacete",
    postalCode: "02630",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=14097377734518487932&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Peluquer%C3%ADa%20isabella%20%4039.2122%2C-2.15555&z=16&output=embed",
  coordinates: {
    lat: 39.2122,
    lng: -2.15555
  },
  schedule: [
    {
      days: "lunes",
      hours: "9:30–20:00"
    },
    {
      days: "martes",
      hours: "Cerrado"
    },
    {
      days: "miércoles - jueves",
      hours: "9:30–20:00"
    },
    {
      days: "viernes",
      hours: "9:30–20:30"
    },
    {
      days: "sábado",
      hours: "8:00–14:00"
    },
    {
      days: "domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 4.9,
    count: 14,
    url: "https://maps.google.com/?cid=14097377734518487932&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    featured: [
      {
        author: "Fm",
        rating: 5,
        text: "Me gusta mucho de esta peluquería. Isabella corta muy bien, peina maravillosamente y tiene muchísima paciencia para los niños.\nEs muy cariñosa y amable.\nLe gusta mucho del trabajo que hace.",
        date: "Hace un año"
      },
      {
        author: "Alberto Gsr600",
        rating: 5,
        text: "Gran peluquería y muy maja la peluquera que cortó el pelo Ami hija súper agradable y simpática.",
        date: "Hace 2 años"
      },
      {
        author: "maria llaguno",
        rating: 5,
        text: "El trato genial...me encanta como me deja el pelo siempre como yo quiero!!",
        date: "Hace 4 años"
      },
      {
        author: "Pablo Perez",
        rating: 5,
        text: "Siempre formandose👍👍👍",
        date: "Hace 2 años"
      }
    ]
  },
  services: [
    {
      id: "cortes-personalizados",
      name: "Cortes Personalizados",
      description: "Cortes adaptados a tu rostro, personalidad y estilo de vida. Isabella estudia cada detalle para crear el look perfecto que resalte tu belleza natural. Técnicas actualizadas y asesoramiento profesional para que siempre luzcas impecable.",
      benefits: [
        "Corte adaptado a tu tipo de rostro y cabello",
        "Asesoramiento de estilo personalizado",
        "Técnicas profesionales de última tendencia"
      ],
      icon: "Sparkles"
    },
    {
      id: "peinados-eventos",
      name: "Peinados para Eventos",
      description: "Peinados espectaculares para bodas, comuniones, celebraciones y ocasiones especiales. Isabella crea looks únicos que te harán brillar en tu día especial. Desde recogidos elegantes hasta peinados modernos y sofisticados.",
      benefits: [
        "Diseños exclusivos para tu evento",
        "Técnica profesional que garantiza duración",
        "Prueba previa sin compromiso"
      ],
      icon: "Flower2"
    },
    {
      id: "cortes-infantiles",
      name: "Cortes Infantiles",
      description: "Especialistas en cortes para niños y niñas con paciencia, cariño y profesionalidad. Isabella tiene un don especial para hacer que los más pequeños se sientan cómodos y disfruten de su visita. Ambiente tranquilo y trato amable que convierte el corte en una experiencia positiva.",
      benefits: [
        "Trato especial y cariñoso con los niños",
        "Ambiente relajado y acogedor",
        "Experiencia sin estrés para padres e hijos"
      ],
      icon: "Heart"
    },
    {
      id: "coloracion-profesional",
      name: "Coloración Profesional",
      description: "Servicios de color que van desde mechas y balayage hasta cambios de look completos. Utilizamos productos de alta calidad que cuidan tu cabello mientras consigues el tono perfecto. Técnicas modernas para resultados naturales y luminosos.",
      benefits: [
        "Productos premium que respetan tu cabello",
        "Tonos personalizados y naturales",
        "Asesoramiento sobre el color ideal para ti"
      ],
      icon: "Sparkles"
    },
    {
      id: "tratamientos-capilares",
      name: "Tratamientos Capilares",
      description: "Tratamientos intensivos para recuperar la salud, brillo y vitalidad de tu cabello. Hidratación profunda, reparación de puntas y tratamientos específicos según las necesidades de tu melena. Isabella cuida cada detalle para que tu pelo luzca radiante.",
      benefits: [
        "Recuperación del brillo y suavidad natural",
        "Tratamientos adaptados a tu tipo de cabello",
        "Resultados visibles desde la primera sesión"
      ],
      icon: "Zap"
    },
    {
      id: "peinados-diarios",
      name: "Peinados y Brushing",
      description: "Peinados perfectos para tu día a día o para esa ocasión especial. Brushing profesional que aporta volumen, movimiento y brillo. Isabella domina todas las técnicas para conseguir el acabado que buscas, desde liso perfecto hasta ondas naturales.",
      benefits: [
        "Acabados profesionales duraderos",
        "Técnicas que no dañan tu cabello",
        "Volumen y movimiento natural"
      ],
      icon: "Sparkles"
    },
    {
      id: "asesoramiento-imagen",
      name: "Asesoramiento de Imagen",
      description: "Consultoría personalizada para encontrar tu mejor versión. Te ayudamos a descubrir qué corte, color y estilo se adaptan mejor a ti. Isabella se mantiene en formación continua para ofrecerte las últimas tendencias y los mejores consejos de belleza.",
      benefits: [
        "Análisis completo de tu estilo personal",
        "Recomendaciones basadas en tendencias actuales",
        "Profesional en constante formación"
      ],
      icon: "Eye"
    },
    {
      id: "servicios-novias",
      name: "Servicios para Novias",
      description: "Tu día más especial merece un look perfecto. Creamos peinados de novia únicos que complementan tu vestido y personalidad. Servicio completo con prueba previa y atención el día de tu boda para que luzcas radiante.",
      benefits: [
        "Diseño exclusivo para tu gran día",
        "Prueba previa incluida",
        "Servicio a domicilio disponible"
      ],
      icon: "Flower2"
    }
  ],
  process: [
    {
      step: 1,
      title: "Reserva tu Cita",
      description: "Llámanos al 659 85 04 96 o escríbenos por WhatsApp. Te atenderemos personalmente para encontrar el mejor horario y conocer qué servicio necesitas."
    },
    {
      step: 2,
      title: "Consulta Personalizada",
      description: "Isabella te escucha y analiza tu cabello para entender exactamente qué buscas. Te asesoramos sobre el mejor corte, color o tratamiento según tu estilo y necesidades específicas."
    },
    {
      step: 3,
      title: "Transformación con Técnica",
      description: "Realizamos tu servicio con profesionalidad, técnicas actualizadas y productos de calidad. Isabella trabaja con pasión y atención al detalle para conseguir el resultado perfecto que deseas."
    },
    {
      step: 4,
      title: "Resultado Espectacular",
      description: "Sales de Peluquería Isabella luciendo exactamente como querías. Te damos consejos para mantener tu look en casa y te esperamos en tu próxima visita."
    }
  ],
  whyUs: [
    {
      title: "Valoración Excepcional de 4.9 Estrellas",
      description: "Nuestras 14 reseñas en Google reflejan la satisfacción de nuestras clientas. Destacan la profesionalidad de Isabella, su trato cariñoso y amable, y sobre todo que consigue exactamente el resultado que buscas. La confianza de nuestras clientas es nuestro mejor aval.",
      icon: "Sparkles"
    },
    {
      title: "Especialistas en Toda la Familia",
      description: "Desde cortes infantiles con paciencia y cariño hasta peinados sofisticados para eventos especiales. Isabella tiene un don especial con los niños y la técnica para crear looks espectaculares en adultos. Un salón donde toda la familia se siente bienvenida.",
      icon: "Heart"
    },
    {
      title: "Formación Continua y Pasión",
      description: "Isabella se mantiene constantemente formándose en las últimas técnicas y tendencias de peluquería. Su pasión por el trabajo se refleja en cada corte, cada peinado y cada servicio. Te ofrece lo mejor de la profesión con técnicas actualizadas y creatividad.",
      icon: "Zap"
    },
    {
      title: "Te Escuchamos y Entendemos",
      description: "Lo que más valoran nuestras clientas es que conseguimos dejar el pelo siempre como ellas quieren. Isabella escucha tus necesidades, te asesora profesionalmente y trabaja hasta lograr el resultado perfecto. Sales de la peluquería luciendo exactamente tu look ideal.",
      icon: "Eye"
    }
  ],
  team: [
    {
      name: "Isabella",
      role: "Estilista y Propietaria",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionadas por la belleza y el cuidado personal. En Peluquería isabella nos dedicamos a realzar la belleza natural de cada clienta con tratamientos de calidad."
    }
  ],
  gallery: [
    {
      src: "/images/gallery/2.webp",
      alt: "Peluquería isabella - Imagen 2"
    },
    {
      src: "/images/hero.webp",
      alt: "Peluquería isabella - Imagen 3"
    },
    {
      src: "/images/gallery/4.webp",
      alt: "Peluquería isabella - Imagen 4"
    },
    {
      src: "/images/gallery/5.webp",
      alt: "Peluquería isabella - Imagen 5"
    },
    {
      src: "/images/gallery/6.webp",
      alt: "Peluquería isabella - Imagen 6"
    },
    {
      src: "/images/gallery/7.webp",
      alt: "Peluquería isabella - Imagen 7"
    },
    {
      src: "/images/gallery/8.webp",
      alt: "Peluquería isabella - Imagen 8"
    }
  ],
  faq: [
    {
      question: "¿Necesito pedir cita previa en Peluquería Isabella?",
      answer: "Sí, recomendamos pedir cita previa para garantizar que podamos atenderte con la dedicación y tiempo que mereces. Puedes llamarnos al 659 85 04 96 o escribirnos por WhatsApp. Así evitas esperas y nos aseguramos de tener todo preparado para tu servicio."
    },
    {
      question: "¿Peluquería Isabella atiende a niños pequeños?",
      answer: "¡Por supuesto! Isabella tiene muchísima paciencia y cariño con los más pequeños. Muchas familias de La Roda confían en nosotros para los cortes infantiles porque creamos un ambiente tranquilo y agradable donde los niños se sienten cómodos. Es una experiencia positiva tanto para ellos como para los padres."
    },
    {
      question: "¿Qué servicios de peinado ofrecéis para eventos especiales?",
      answer: "En Peluquería Isabella realizamos peinados para bodas, comuniones, bautizos, graduaciones y todo tipo de celebraciones. Isabella peina maravillosamente y crea looks únicos adaptados a cada ocasión. Ofrecemos prueba previa para que estés completamente segura del resultado final."
    },
    {
      question: "¿Cómo sé qué corte me favorece más?",
      answer: "Isabella te asesora personalmente según la forma de tu rostro, tipo de cabello y estilo de vida. Con su experiencia y formación continua, te recomienda el corte que mejor se adapta a ti. Muchas clientas destacan que consigue exactamente el look que desean porque escucha y entiende sus necesidades."
    },
    {
      question: "¿Qué productos utilizáis en los tratamientos?",
      answer: "Trabajamos con productos profesionales de alta calidad que respetan y cuidan tu cabello. Isabella selecciona los productos más adecuados para cada tipo de pelo y servicio, garantizando resultados óptimos y duraderos. Tu cabello queda sano, brillante y con un acabado profesional."
    },
    {
      question: "¿Por qué Peluquería Isabella tiene tan buenas valoraciones?",
      answer: "Nuestras clientas valoran la profesionalidad, el trato cercano y amable, y sobre todo que conseguimos los resultados que buscan. Con 4.9 estrellas sobre 5 en Google, las reseñas destacan la paciencia con los niños, la técnica de Isabella y que siempre sales con el pelo como tú quieres. La pasión por el trabajo se nota en cada servicio."
    },
    {
      question: "¿Ofrecéis servicios de coloración y mechas?",
      answer: "Sí, realizamos todo tipo de servicios de color: tintes completos, mechas, balayage, reflejos y correcciones de color. Isabella te asesora sobre el tono que mejor te favorece y utiliza técnicas modernas para conseguir resultados naturales y luminosos que cuidan la salud de tu cabello."
    },
    {
      question: "¿Dónde está ubicada Peluquería Isabella en La Roda?",
      answer: "Estamos en La Roda, Albacete. Para conocer nuestra ubicación exacta y cómo llegar, puedes llamarnos al 659 85 04 96 y te indicaremos cómo encontrarnos. Contamos con fácil acceso y un ambiente acogedor donde te sentirás como en casa."
    }
  ],
  seo: {
    titleTemplate: "%s | Peluquería Isabella",
    defaultTitle: "Peluquería Isabella - Tu Salón de Confianza en La Roda",
    defaultDescription: "Peluquería Isabella en La Roda, Albacete. Cortes personalizados, peinados para eventos y especialistas en niños. Valoración 4.9★. Llama al 659 85 04 96 y reserva tu cita.",
    keywords: [
      "peluquería La Roda",
      "Peluquería Isabella",
      "peluquería Albacete",
      "cortes de pelo La Roda",
      "peinados para eventos La Roda",
      "peluquería infantil La Roda",
      "coloración La Roda",
      "Isabella peluquera",
      "salón de belleza La Roda",
      "tratamientos capilares Albacete",
      "peinados de novia La Roda",
      "mejor peluquería La Roda"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Peluquería isabella",
    cif: "",
    registeredAddress: "C. Hermanos Quintero, 21, 02630 La Roda, Albacete, España, La Roda, Albacete"
  },
  heroHeadline: [
    "Tu Centro de",
    "Belleza",
    "en La Roda"
  ],
  heroDescription: "En Peluquería Isabella encontrarás un espacio donde tu cabello se transforma con técnica, creatividad y dedicación. Isabella te escucha, entiende tu estilo y trabaja con pasión para que salgas luciendo exactamente como deseas. Especialistas en toda la familia, desde los más pequeños hasta looks sofisticados.",
  specialty: "Cortes y Peinados",
  ctaLabel: "Realza tu Belleza",
  ctaHeadline: "¿Lista para lucir el cabello que siempre has deseado?",
  ctaDescription: "Reserva tu cita en Peluquería Isabella y descubre por qué nuestras clientas confían en nosotros. Te esperamos en La Roda para transformar tu look con profesionalidad y cercanía.",
  statsLabel: "Clientas",
  schemaType: "BeautySalon",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Técnicas avanzadas de estética y belleza para realzar tu imagen y cuidar de ti.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la belleza en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu belleza, nuestra pasión",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para realzar tu belleza natural.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestras clientas",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestro centro",
    galleryDescription: "Un espacio diseñado para tu bienestar y relajación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestras clientas.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializadas",
    teamDescription: "Experiencia y pasión al servicio de tu belleza"
  }
}

export type Clinic = typeof clinic
