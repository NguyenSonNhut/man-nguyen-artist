import vi from "@/data/locales/vi";
import en from "@/data/locales/en";

export const dictionaries = {
  vi,
  en,
};

export type Locale = keyof typeof dictionaries;