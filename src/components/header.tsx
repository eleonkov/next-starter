"use client";

import { useState, useEffect, startTransition } from "react";
import { useParams } from "next/navigation";
import { useRouter, usePathname, Link } from "@/navigation";
import { locales } from "@/config";
import { useTranslations } from "next-intl";
import { Namespace } from "@/types/namespace";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [top, setTop] = useState<boolean>(true);

  const t = useTranslations(Namespace.Navigation);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const onChange = (nextLocale: (typeof locales)[number]) => () => {
    startTransition(() => router.replace({ pathname }, { locale: nextLocale }));
  };

  return (
    <header className="pt-5 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          <div className="flex flex-1 items-center">
            <Link
              href="/"
              className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50"
            >
              LOGO
            </Link>
          </div>

          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <button
                onClick={onChange("en")}
                className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50"
              >
                EN
              </button>
            </li>
            <li>
              <button
                onClick={onChange("de")}
                className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50"
              >
                DE
              </button>
            </li>
            <li>
              <Link
                href="/about"
                className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50"
              >
                {t("home")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
