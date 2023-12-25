import { LocaleKey } from "@/libs/contentful";
import NavFooter from "@/components/NavFooter";

export default function AboutLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: LocaleKey };
}) {
  const { locale } = params;

  return (
    <NavFooter theme="white" locale={locale}>
      {children}
    </NavFooter>
  );
}
