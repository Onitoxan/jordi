import { TypeReelSkeleton } from "@/types/contentful";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN,
});

export function isValidLocale(locale: string): locale is LocaleKey {
  return locale === "es-ES" || locale === "en-US";
}
export type LocaleKey = "es-ES" | "en-US";
export const getLocales = async () => {
  const response = await client.getLocales();

  return response.items;
};
export const getReels = async (locale: LocaleKey) => {
  const response = await client.getEntries<TypeReelSkeleton>({
    content_type: "reel",
    locale,
  });

  return response.items;
};

export const getVideo = async (id: string) => {
  const response = await client.getAsset(id);

  return response;
};

export const getVideoFromReel = async (id: string, locale: LocaleKey) => {
  const reel = await client.getEntry<TypeReelSkeleton>(id, { locale });

  return await client.getAsset(reel.fields.video.sys.id);
};
