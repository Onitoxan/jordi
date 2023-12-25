import { LocaleKey } from "@/libs/contentful";
import NavFooter from "@/components/NavFooter";

export default function DOPLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: LocaleKey };
}) {
  const { locale } = params;

  return (
    <NavFooter theme="dop" locale={locale}>
      {children}
    </NavFooter>
  );
}
