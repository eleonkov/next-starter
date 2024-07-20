"use client";

import { defaultLocale } from "@/config";
import Error from "next/error";

export default function NotFound() {
  return (
    <html lang={defaultLocale}>
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
}
