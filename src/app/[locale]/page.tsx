import NavFooter from "@/components/NavFooter";
import { LocaleKey } from "@/libs/contentful";

export default async function Home({
  params,
}: {
  params: { locale: LocaleKey };
}) {
  const { locale } = params;
  return (
    <NavFooter theme="white" locale={locale}>
      <main className="flex min-h-screen flex-col items-center justify-between  py-28 md:py-20 xl:py-24">
        {/** Content goes here */}
      </main>
    </NavFooter>
  );
}
