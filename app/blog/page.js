import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog-posts";

export const metadata = {
  title: "Blog | Çilingir ve Anahtar Rehberi",
  description:
    "Mustafakemalpaşa ve Karacabey çilingir, kapı açma, oto anahtar, kilit değişimi ve ev güvenliği hakkında güncel yazılar. 7/24 çilingir ipuçları.",
  openGraph: {
    title: "Blog | Pasa Çilingir",
    description:
      "Çilingir hizmeti, kapı açma, oto anahtar ve kilit rehberi. Mustafakemalpaşa ve Karacabey.",
    images: ["/logo.png"],
  },
};

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("tr-TR", {
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
      <section className="bg-[#0A2540] py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <nav className="mb-4 text-sm text-white/80" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#F5B301]">
              Ana Sayfa
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#F5B301]">Blog</span>
          </nav>
          <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Çilingir ve Anahtar Rehberi
          </h1>
          <p className="max-w-2xl text-lg text-white/90">
            Mustafakemalpaşa ve Karacabey çilingir hizmeti, kapı açma, oto
            anahtar ve ev güvenliği hakkında faydalı yazılar.
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
                  className="group block rounded-xl border border-gray-200 bg-white p-6 shadow transition hover:border-[#F5B301] hover:shadow-lg"
                >
                  <time
                    dateTime={post.date}
                    className="text-sm text-[#0A2540]/70"
                  >
                    {formatDate(post.date)}
                  </time>
                  <h2 className="mt-2 text-xl font-bold text-[#0A2540] group-hover:text-[#F5B301] transition md:text-2xl">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-[#2E2E2E]">{post.excerpt}</p>
                  <span className="mt-3 inline-block font-semibold text-[#F5B301] group-hover:underline">
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
