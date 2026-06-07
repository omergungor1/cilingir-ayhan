import {
  SITE,
  MUSTAFAKEMALPASA_MAHALLELER,
  KARACABEY_MAHALLELER,
} from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { slugify, ILCE_SLUG_MUSTAFAKEMALPASA, ILCE_SLUG_KARACABEY } from "@/lib/utils";

export const dynamic = "force-static";

function url(path) {
  const base = SITE.domain.replace(/\/$/, "");
  return path === "/" ? `${base}/` : `${base}${path}`;
}

export default function sitemap() {
  const now = new Date();

  /** Ana ve sabit sayfalar */
  const staticRoutes = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/hizmetler", priority: 0.9, changeFrequency: "weekly" },
    { path: "/hizmetler/ev-cilingir", priority: 0.8, changeFrequency: "monthly" },
    { path: "/hizmetler/acil-cilingir", priority: 0.8, changeFrequency: "monthly" },
    { path: "/hizmetler/oto-cilingir", priority: 0.8, changeFrequency: "monthly" },
    { path: "/hizmetler/kasa-cilingir", priority: 0.8, changeFrequency: "monthly" },
    { path: "/hizmetler/7-24-cilingir", priority: 0.8, changeFrequency: "monthly" },
    { path: "/hizmet-bolgelerimiz", priority: 0.85, changeFrequency: "weekly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/iletisim", priority: 0.7, changeFrequency: "monthly" },
    { path: "/gizlilik-politikasi", priority: 0.3, changeFrequency: "yearly" },
    { path: "/kvkk", priority: 0.3, changeFrequency: "yearly" },
    { path: "/cerez-politikasi", priority: 0.3, changeFrequency: "yearly" },
  ];

  /** Blog yazıları */
  const blogRoutes = BLOG_POSTS.map((post) => ({
    path: `/blog/${post.slug}`,
    priority: 0.6,
    changeFrequency: "monthly",
  }));

  /** Mahalle detay sayfaları */
  const mahalleRoutes = [
    ...MUSTAFAKEMALPASA_MAHALLELER.map((mahalle) => ({
      path: `/hizmet-bolgelerimiz/${ILCE_SLUG_MUSTAFAKEMALPASA}/${slugify(mahalle)}`,
      priority: 0.7,
      changeFrequency: "monthly",
    })),
    ...KARACABEY_MAHALLELER.map((mahalle) => ({
      path: `/hizmet-bolgelerimiz/${ILCE_SLUG_KARACABEY}/${slugify(mahalle)}`,
      priority: 0.7,
      changeFrequency: "monthly",
    })),
  ];

  const allRoutes = [...staticRoutes, ...blogRoutes, ...mahalleRoutes];

  return allRoutes.map(({ path, priority, changeFrequency }) => ({
    url: url(path),
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
