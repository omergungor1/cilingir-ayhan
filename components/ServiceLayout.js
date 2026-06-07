import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export default function ServiceLayout({
  title,
  description,
  imageSrc,
  imageAlt,
  children,
}) {
  return (
    <article>
      <section className="relative bg-[#0A2540] py-12 md:py-16">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-4">
          <nav className="mb-4 text-sm text-white/80" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#F5B301]">
              Ana Sayfa
            </Link>
            <span className="mx-2">/</span>
            <Link href="/hizmetler" className="hover:text-[#F5B301]">
              Hizmetler
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#F5B301]">{title}</span>
          </nav>
          <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            {title}
          </h1>
          <p className="mb-6 max-w-2xl text-lg text-white/90">{description}</p>
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center gap-2 rounded-xl bg-[#F5B301] px-6 py-3 font-bold text-[#0A2540] transition hover:bg-[#e5a300]"
            aria-label="Hemen ara"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Hemen Ara
          </a>
        </div>
      </section>
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-lg prose-gray max-w-none prose-headings:text-[#0A2540] prose-p:text-[#2E2E2E] prose-li:text-[#2E2E2E]">
          {children}
        </div>
      </section>
    </article>
  );
}
