import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { SITE } from "@/lib/constants";

export const metadata = {
  title: "Blog | Çilingir ve Anahtar Rehberi",
  description:
    "Gemlik çilingir, kapı açma, oto anahtar, kilit değişimi ve ev güvenliği hakkında güncel yazılar.",
  alternates: { canonical: `${SITE.domain}/blog` },
  openGraph: {
    title: "Blog | Gemlik Çilingir Ayhan",
    description: "Çilingir hizmeti ve kilit rehberi. Gemlik yerel SEO blog.",
    images: ["/logo.png"],
  },
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const posts = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <article>
      <section className="bg-brand py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <nav className="mb-4 text-sm text-text-on-dark/85" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-accent">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <span className="text-accent">Blog</span>
          </nav>
          <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Çilingir ve Anahtar Rehberi
          </h1>
          <p className="max-w-2xl text-lg text-text-on-dark/95">
            Gemlik çilingir hizmeti, kapı açma, oto anahtar ve ev güvenliği
            hakkında faydalı yazılar.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <ul className="space-y-8">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block rounded-xl border border-gray-200 bg-white p-6 shadow transition hover:border-accent hover:shadow-lg"
                >
                  <time dateTime={post.date} className="text-sm text-brand/70">
                    {formatDate(post.date)}
                  </time>
                  <h2 className="mt-2 text-xl font-bold text-brand transition group-hover:text-accent md:text-2xl">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-text">{post.excerpt}</p>
                  <span className="mt-3 inline-block font-semibold text-accent group-hover:underline">
                    Devamını oku →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="h-24 md:h-32" aria-hidden="true" />
    </article>
  );
}
