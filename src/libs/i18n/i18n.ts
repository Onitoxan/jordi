import es from "./es.json";
import en from "./en.json";
import { LocaleKey } from "../contentful";

export const locales: Array<LocaleKey> = ["en-US", "es-ES"];
export const strings: Record<LocaleKey, typeof es> = {
  "es-ES": es,
  "en-US": en,
};

export const getLocalePath = (path: string, locale: LocaleKey) => {
  return path.replace("[locale]", locale);
};
