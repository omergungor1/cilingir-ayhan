import { SITE } from "@/lib/constants";

export const dynamic = "force-static";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: `${SITE.domain}/sitemap.xml`,
  };
}
