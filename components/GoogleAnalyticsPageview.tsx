"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { gtagPageview } from "@/lib/gtag";

export default function GoogleAnalyticsPageview() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.toString();
    gtagPageview(query ? `${pathname}?${query}` : pathname);
  }, [pathname, searchParams]);

  return null;
}
