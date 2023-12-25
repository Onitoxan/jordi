import { LocaleKey } from "@/libs/contentful";
import { getLocalePath } from "@/libs/i18n/i18n";

const HOME = "/[locale]";
const DOP = "/[locale]/dop";
const CAM_OP = "/[locale]/camOp";
const ABOUT = "/[locale]/about";

export const homeURL = (locale: LocaleKey) => getLocalePath(HOME, locale);

export const dopURL = (locale: LocaleKey) => getLocalePath(DOP, locale);

export const camOpURL = (locale: LocaleKey) => getLocalePath(CAM_OP, locale);

export const aboutURL = (locale: LocaleKey) => getLocalePath(ABOUT, locale);
