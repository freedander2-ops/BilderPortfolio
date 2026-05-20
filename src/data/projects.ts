import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "1",
    slug: "minimalism-city",
    title: "Минимализм в ЖК 'Сити'",
    category: "Капитальный ремонт",
    location: "Москва, Пресненская наб.",
    year: "2023",
    layoutType: "curtain",
    mainImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    description: "Интеграция теневых профилей и бесщелевых примыканий. Безупречная геометрия стен и скрытое освещение.",
    fullStory: "Этот проект стал вызовом в плане точности. Мы работали с теневыми профилями Eurokraab и скрытыми плинтусами. Каждый угол был выверен до миллиметра, чтобы обеспечить идеальную стыковку материалов без видимых швов.",
    features: ["Теневые профили", "Скрытый плинтус", "Интегрированный свет"],
    gallery: [
      { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop", alt: "Гостиная", type: "image" },
      { url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop", alt: "Спальня", type: "image" }
    ],
    beforeAfter: {
      before: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=1200",
      after: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1200"
    }
  },
  {
    id: "2",
    slug: "penthouse-art-residence",
    title: "Пентхаус Art Residence",
    category: "Дизайнерская отделка",
    location: "Москва, Ленинградский пр-т",
    year: "2022",
    layoutType: "floating",
    mainImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
    description: "Работа с широкоформатным керамогранитом 1200x2400. Монтаж сложного инженерного освещения.",
    fullStory: "В этом пентхаусе мы реализовали сложную концепцию освещения и крупноформатной плитки. Основная сложность заключалась в подъеме и монтаже плит керамогранита весом более 60 кг каждая с минимальными допусками.",
    features: ["Крупный формат", "Сложный свет", "Умный дом"],
    gallery: [
      { url: "https://images.unsplash.com/photo-1556912177-f261947e4529?q=80&w=2070&auto=format&fit=crop", alt: "Кухня", type: "image" }
    ]
  },
  {
    id: "3",
    slug: "loft-pokrovka",
    title: "Лофт на Покровке",
    category: "Реставрация и инженерия",
    location: "Москва, Покровка",
    year: "2023",
    layoutType: "stacked",
    mainImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    description: "Открытые коммуникации в стиле индустриальный шик. Сохранение исторической фактуры кирпича.",
    fullStory: "Реставрация кирпичной кладки 19 века и интеграция современных инженерных систем. Мы сохранили дух старой Москвы, обеспечив при этом современный уровень комфорта и безопасности.",
    features: ["Реставрация кирпича", "Открытая медь", "Лофт стиль"],
    gallery: []
  }
];
