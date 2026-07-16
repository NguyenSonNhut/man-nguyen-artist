export type ArtworkCategory =
  | "oil"
  | "watercolor"
  | "sketch"
  | "acrylic"
  | "charcoal";

export interface Artwork {
  id: number;

  slug: string;

  title: {
    vi: string;
    en: string;
  };

  description: {
    vi: string;
    en: string;
  };

  category: ArtworkCategory;

  medium: {
    vi: string;
    en: string;
  };

  year: number;

  width: number;

  height: number;

  thumbnail: string;

  featured: boolean;

  available: boolean;
}

export const artworks: Artwork[] = [
  {
    id: 1,

    slug: "sunset-on-the-river",

    title: {
      vi: "Hoàng hôn trên sông",
      en: "Sunset on the River",
    },

    description: {
      vi: "Khung cảnh hoàng hôn yên bình bên dòng sông miền quê Việt Nam.",
      en: "A peaceful sunset beside a Vietnamese countryside river.",
    },

    category: "oil",

    medium: {
      vi: "Sơn dầu",
      en: "Oil Painting",
    },

    year: 2024,

    width: 80,

    height: 120,

    thumbnail: "/images/artworks/sunset-on-the-river-thumb.jpg",

    featured: true,

    available: true,
  },

  {
    id: 2,

    slug: "lotus-pond",

    title: {
      vi: "Ao Sen",
      en: "Lotus Pond",
    },

    description: {
      vi: "Ao sen mùa hạ với gam màu dịu nhẹ.",
      en: "A summer lotus pond with gentle colors.",
    },

    category: "watercolor",

    medium: {
      vi: "Màu nước",
      en: "Watercolor",
    },

    year: 2023,

    width: 56,

    height: 76,

    thumbnail: "/images/artworks/lotus-pond-thumb.jpg",

    featured: true,

    available: false,
  },

  {
    id: 3,

    slug: "old-street",

    title: {
      vi: "Phố Cổ",
      en: "Old Street",
    },

    description: {
      vi: "Ký họa bút sắt về kiến trúc phố cổ.",
      en: "Ink sketch of an old town street.",
    },

    category: "sketch",

    medium: {
      vi: "Ký họa bút sắt",
      en: "Ink Sketch",
    },

    year: 2022,

    width: 42,

    height: 60,

    thumbnail: "/images/artworks/old-street-thumb.jpg",

    featured: true,

    available: true,
  },
];