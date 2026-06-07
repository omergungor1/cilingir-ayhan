import { SITE } from "@/lib/constants";
import { getAllSeoSlugs } from "@/lib/seo-data";
import { BLOG_POSTS } from "@/lib/blog-posts";

export const dynamic = "force-static";

function url(path) {
  const base = SITE.domain.replace(/\/$/, "");
  return path === "/" ? `${base}/` : `${base}${path}`;
}

export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/hakkimizda", priority: 0.8, changeFrequency: "monthly" },
    { path: "/iletisim", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/gizlilik-politikasi", priority: 0.3, changeFrequency: "yearly" },
    { path: "/kvkk", priority: 0.3, changeFrequency: "yearly" },
    { path: "/cerez-politikasi", priority: 0.3, changeFrequency: "yearly" },
  ];

  const seoRoutes = getAllSeoSlugs().map((slug) => ({
    path: `/${slug}`,
    priority: slug.includes("-mahallesi-") || slug.includes("-mahalle-") ? 0.75 : 0.85,
    changeFrequency: "monthly",
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    path: `/blog/${post.slug}`,
    priority: 0.6,
    changeFrequency: "monthly",
  }));

  const allRoutes = [...staticRoutes, ...seoRoutes, ...blogRoutes];

  return allRoutes.map(({ path, priority, changeFrequency }) => ({
    url: url(path),
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
