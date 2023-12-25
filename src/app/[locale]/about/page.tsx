import { LocaleKey } from "@/libs/contentful";

type AboutProps = {
  params: { locale: LocaleKey };
};
export default async function About({ params }: AboutProps) {
  const locale = params.locale;
  console.log(locale);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-28 md:py-20 xl:py-24">
      {/** Content goes here */}
    </main>
  );
}
