import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Namespace } from "@/types/namespace";

type HomeProps = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: HomeProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: Namespace.IndexPage });

  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

export default function Home({ params: { locale } }: HomeProps) {
  unstable_setRequestLocale(locale);

  const t = useTranslations(Namespace.IndexPage);

  return (
    <div className="pt-5 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">{t("meta_title")}</div>
    </div>
  );
}
