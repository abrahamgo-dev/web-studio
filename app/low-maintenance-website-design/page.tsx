import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryLanding from "@/components/IndustryLanding";
import {
  getLandingPage,
  buildLandingMetadata,
  buildLandingJsonLd,
} from "@/lib/landingPages";

const SLUG = "low-maintenance-website-design";

export function generateMetadata(): Metadata {
  const page = getLandingPage(SLUG);
  return page ? buildLandingMetadata(page) : {};
}

export default function Page() {
  const page = getLandingPage(SLUG);

  if (!page) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildLandingJsonLd(page)),
        }}
      />
      <IndustryLanding page={page} />
    </>
  );
}
