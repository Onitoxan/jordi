import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { LocaleKey, isValidLocale } from "@/libs/contentful";
import { redirect } from "next/navigation";
import { strings } from "@/libs/i18n/i18n";

const montserrat = Montserrat({ subsets: ["latin"] });

export function generateMetadata({
  params,
}: {
  params: { locale: LocaleKey };
}): Metadata {
  const { locale } = params;

  return {
    title: strings[locale].head.title,
    description: strings[locale].head.description,
  };
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: LocaleKey };
}) {
  const { locale } = params;
  if (!isValidLocale(locale)) {
    redirect("es-ES");
  }
  return (
    <html lang={params.locale}>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
