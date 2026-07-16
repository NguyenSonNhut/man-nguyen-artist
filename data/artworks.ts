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
    slug: "the-girl-and-the-goat",

    title: {
      vi: "Cô gái và con dê",
      en: "The Girl and the Goat",
    },

    description: {
      vi: "Một cô gái trẻ đang chơi đùa với con dê trong một đêm trăng.",
      en: "A young girl playing with a goat under the moonlight.",
    },

    category: "oil",

    medium: {
      vi: "Sơn dầu",
      en: "Oil Painting",
    },

    year: 2000,

    width: 80,
    height: 60,

    available: true,

    thumbnail: "/images/thumbnails/the-girl-and-the-goat.webp",

    image: "/images/artworks/the-girl-and-the-goat.webp",

    featured: true,
  },

  {
    slug: "binh-hung-binh-chanh",

    title: {
      vi: "Bình Hưng - Bình Chánh",
      en: "Binh Hung - Binh Chanh",
    },

    description: {
      vi: "Vẻ đẹp thanh bình của khu vực Bình Hưng - Bình Chánh.",
      en: "The peaceful beauty of the Binh Hung - Binh Chanh area.",
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

    thumbnail: "/images/thumbnails/binh-hung-binh-chanh.webp",

    image: "/images/artworks/binh-hung-binh-chanh.webp",

    featured: true,
  },
  {
    slug: "hon-son-kien-giang",

    title: {
      vi: "Hòn Sơn - Kiên Giang",
      en: "Hon Son - Kien Giang",
    },

    description: {
      vi: "Khung cảnh biển tuyệt đẹp tại Hòn Sơn, Kiên Giang.",
      en: "Beautiful coastal scenery at Hon Son, Kien Giang.",
    },

    category: "watercolor",

    medium: {
      vi: "Màu nước",
      en: "Watercolor",
    },

    year: 2025,

    width: 80,
    height: 60,

    available: true,

    thumbnail: "/images/thumbnails/hon-son-kien-giang.webp",

    image: "/images/artworks/hon-son-kien-giang.webp",

    featured: true,
  },

  {
    slug: "tan-the",

    title: {
      vi: "Tận Thế",
      en: "End of the World",
    },

    description: {
      vi: "Một bức tranh thể hiện sự hủy diệt và tận thế.",
      en: "A painting depicting destruction and the end of the world.",
    },

    category: "oil",

    medium: {
      vi: "Sơn dầu",
      en: "Oil Painting",
    },

    year: 2024,

    width: 56,
    height: 38,

    available: false,

    thumbnail: "/images/thumbnails/tan-the.webp",

    image: "/images/artworks/tan-the.webp",

    featured: true,
  },
  {
    slug: "tinh-nguoi-covid",

    title: {
      vi: "Tình người trong đại dịch Covid-19",
      en: "Human Connection in the Covid-19 Pandemic",
    },

    description: {
      vi: "Một bức tranh thể hiện sự đoàn kết và tình người trong đại dịch Covid-19.",
      en: "A painting depicting unity and human connection during the Covid-19 pandemic.",
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

    thumbnail: "/images/thumbnails/tinh-nguoi-covid.webp",

    image: "/images/artworks/tinh-nguoi-covid.webp",

    featured: true,
  },
];