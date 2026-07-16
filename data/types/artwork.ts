export type Category =
  | "oil"
  | "watercolor"
  | "sketch";

export interface Artwork {
  id: string;

  slug: string;

  title: {
    vi: string;
    en: string;
  };

  description: {
    vi: string;
    en: string;
  };

  category: Category;

  width: number;

  height: number;

  year: number;

  medium: string;

  thumbnail: string;

  image: string;

  featured: boolean;
}