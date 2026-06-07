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
    title: `${post.title} | Gemlik Çilingir Blog`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `${SITE.domain}/blog/${post.slug}` },
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
  return new Date(dateStr).toLocaleDateString("tr-TR", {
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
      <section className="bg-brand py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <nav className="mb-4 text-sm text-text-on-dark/85" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-accent">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-accent">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-accent line-clamp-1">{post.title}</span>
          </nav>
          <time dateTime={post.date} className="block text-sm text-text-on-dark/85">
            {formatDate(post.date)}
          </time>
          <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            {post.title}
          </h1>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="prose prose-lg max-w-none prose-headings:text-brand prose-p:text-text">
            {post.sections.map((section, i) => {
              if (section.type === "h2") {
                return (
                  <h2 key={i} className="mt-8 text-xl font-bold text-brand first:mt-0">
                    {section.text}
                  </h2>
                );
              }
              if (section.type === "p") {
                return (
                  <p key={i} className="mt-3 leading-relaxed text-text">
                    {section.text}
                  </p>
                );
              }
              return null;
            })}
          </div>

          <div className="mt-12 rounded-xl bg-brand p-8 text-center text-white">
            <p className="mb-4 text-lg font-semibold">
              Acil çilingir mi lazım? Hemen arayın!
            </p>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 font-bold text-white transition hover:bg-accent-hover"
            >
              {SITE.phoneDisplay}
            </a>
          </div>

          <div className="mt-8 text-center">
            <Link href="/blog" className="font-semibold text-accent hover:underline">
              ← Tüm yazılar
            </Link>
          </div>
        </div>
      </section>

      <div className="h-24 md:h-32" aria-hidden="true" />
    </article>
  );
}
