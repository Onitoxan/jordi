import { LocaleKey } from "@/libs/contentful";
import { strings } from "@/libs/i18n/i18n";
import Link from "next/link";
import React from "react";
import { H1, H2, H3 } from "./TextComponents";
import { aboutURL, camOpURL, dopURL, homeURL } from "@/app/paths";
import SwitchLocale from "./SwitchLocale";

type NavFooterColor = "dop" | "camOp" | "white";

interface NavFooterProps {
  theme: NavFooterColor;
  children: React.ReactNode;
  locale: LocaleKey;
}
const THEME_TO_TAILWIND: Record<
  NavFooterColor,
  { text: string; border: string }
> = {
  dop: { text: "text-dop", border: "border-dop" },
  camOp: { text: "text-camOp", border: "border-camOp" },
  white: { text: "text-white", border: "border-white" },
};

export default function NavFooter({ theme, children, locale }: NavFooterProps) {
  return (
    <>
      <div
        className={`${THEME_TO_TAILWIND[theme].text} fixed w-full h-screen grid content-between xl:px-24 xl:py-14 md:px-16 md:py-8 px-10 py-4`}
      >
        <div className="text-center md:text-start md:flex md:justify-between">
          <div className="flex gap-x-4 justify-center">
            <Link href={homeURL(locale)} className="w-fit">
              <H1 className="font-bold mb-6 md:mb-0">
                {strings[locale].navFooter.title}
              </H1>
            </Link>
            <SwitchLocale />
          </div>
          <div className="justify-center md:justify-normal flex gap-x-14 self-end font-medium">
            <Link href={dopURL(locale)}>
              <H2>{strings[locale].navFooter.sections.dop}</H2>
            </Link>
            <Link href={camOpURL(locale)}>
              <H2>{strings[locale].navFooter.sections.camOp}</H2>
            </Link>
            <Link href={aboutURL(locale)}>
              <H2>{strings[locale].navFooter.sections.about}</H2>
            </Link>
          </div>
        </div>
        <div
          className={`text-end border-b pb-2 ${THEME_TO_TAILWIND[theme].border}`}
        >
          <H3 className="font-extralight me-6">
            {strings[locale].navFooter.footer}
            <span className="font-normal">JORDI F. OROZCO</span>{" "}
            {new Date().getFullYear()} ©
          </H3>
        </div>
      </div>
      {children}
    </>
  );
}
