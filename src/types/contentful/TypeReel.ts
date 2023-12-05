import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeReelFields {
  title: EntryFieldTypes.Symbol;
  video: EntryFieldTypes.AssetLink;
}

export type TypeReelSkeleton = EntrySkeletonType<TypeReelFields, "reel">;
export type TypeReel<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeReelSkeleton, Modifiers, Locales>;
