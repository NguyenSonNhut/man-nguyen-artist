export type ArtistGalleryItem = {
  image: string;
  alt: string;
  aspect: "portrait" | "square" | "wide";
};

export const artistGallery: ArtistGalleryItem[] = [
  {
    image: "/images/artist/den-trang.webp",
    alt: "Studio Portrait",
    aspect: "portrait",
  },
  {
    image: "/images/artist/aocam-doinon.webp",
    alt: "Painting Session",
    aspect: "square",
  },
  {
    image: "/images/artist/dung-dua-tuong.webp",
    alt: "Exhibition",
    aspect: "wide",
  },
];