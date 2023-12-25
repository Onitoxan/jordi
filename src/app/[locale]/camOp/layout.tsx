import { LocaleKey } from "@/libs/contentful";
import NavFooter from "@/components/NavFooter";

export default function CamOpLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: LocaleKey };
}) {
  const { locale } = params;

  return (
    <NavFooter theme="camOp" locale={locale}>
      {children}
    </NavFooter>
  );
}
