import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getPostBySlug } from "@/lib/blog-posts";
import { SITE } from "@/lib/constants";

export const dynamicParams = false;

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Yazı Bulunamadı" };
  return {
    title: `${post.title} | Pasa Çilingir Blog`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      images: ["/logo.png"],
    },
  };
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article>
      <section className="bg-[#0A2540] py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <nav className="mb-4 text-sm text-white/80" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#F5B301]">
              Ana Sayfa
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-[#F5B301]">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#F5B301] line-clamp-1">{post.title}</span>
          </nav>
          <time
            dateTime={post.date}
            className="block text-sm text-white/80"
          >
            {formatDate(post.date)}
          </time>
          <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            {post.title}
          </h1>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="prose prose-lg max-w-none prose-headings:text-[#0A2540] prose-p:text-[#2E2E2E]">
            {post.sections.map((section, i) => {
              if (section.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="mt-8 text-xl font-bold text-[#0A2540] first:mt-0"
                  >
                    {section.text}
                  </h2>
                );
              }
              if (section.type === "p") {
                return (
                  <p key={i} className="mt-3 leading-relaxed text-[#2E2E2E]">
                    {section.text}
                  </p>
                );
              }
              if (section.type === "ul" && section.items) {
                return (
                  <ul key={i} className="mt-3 list-disc space-y-2 pl-6 text-[#2E2E2E]">
                    {section.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>

          <div className="mt-12 rounded-xl bg-[#0A2540] p-8 text-center text-white">
            <p className="mb-4 text-lg font-semibold">
              Acil çilingir mi lazım? Hemen arayın, dakikalar içinde kapınızdayız.
            </p>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2 rounded-xl bg-[#F5B301] px-8 py-4 font-bold text-[#0A2540] transition hover:bg-[#e5a300]"
              aria-label="Hemen ara"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              {SITE.phoneDisplay}
            </a>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="font-semibold text-[#F5B301] hover:underline"
            >
              ← Tüm yazılar
            </Link>
          </div>
        </div>
      </section>

      <div className="h-24 md:h-32" aria-hidden="true" />
    </article>
  );
}
