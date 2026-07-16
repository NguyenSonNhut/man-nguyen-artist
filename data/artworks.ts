export type Artwork = {
  slug: string;

  title: {
    vi: string;
    en: string;
  };

  description: {
    vi: string;
    en: string;
  };

  category: "oil" | "watercolor" | "sketch";

  medium: {
    vi: string;
    en: string;
  };

  year: number;

  width: number;
  height: number;

  available: boolean;

  thumbnail: string;

  image: string;

  featured?: boolean;
};

export const artworks: Artwork[] = [
  {
    slug: "sunset-on-the-river",

    title: {
      vi: "Hoàng hôn trên sông",
      en: "Sunset on the River",
    },

    description: {
      vi: "Khung cảnh hoàng hôn yên bình trên dòng sông quê.",
      en: "A peaceful sunset over the countryside river.",
    },

    category: "oil",

    medium: {
      vi: "Sơn dầu",
      en: "Oil Painting",
    },

    year: 2025,

    width: 80,
    height: 60,

    available: true,

    thumbnail: "/images/thumbnails/sunset-on-the-river.webp",

    image: "/images/artworks/sunset-on-the-river.webp",

    featured: true,
  },

  {
    slug: "lotus-pond",

    title: {
      vi: "Đầm Sen",
      en: "Lotus Pond",
    },

    description: {
      vi: "Vẻ đẹp thanh bình của hồ sen Việt Nam.",
      en: "The peaceful beauty of a Vietnamese lotus pond.",
    },

    category: "watercolor",

    medium: {
      vi: "Màu nước",
      en: "Watercolor",
    },

    year: 2024,

    width: 56,
    height: 38,

    available: false,

    thumbnail: "/images/thumbnails/lotus-pond.webp",

    image: "/images/artworks/lotus-pond.webp",

    featured: true,
  },
];