import Link from "next/link";
import { SITE } from "@/lib/constants";

export default function SeoPageLayout({ page }) {
  return (
    <article>
      <section className="relative bg-brand py-12 md:py-16">
        <div className="relative mx-auto max-w-6xl px-4">
          <nav className="mb-4 text-sm text-text-on-dark/85" aria-label="Breadcrumb">
            {page.breadcrumbs.map((item, i) => (
              <span key={item.href}>
                {i > 0 && <span className="mx-2">/</span>}
                {i < page.breadcrumbs.length - 1 ? (
                  <Link href={item.href} className="hover:text-accent">
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-accent">{item.name}</span>
                )}
              </span>
            ))}
          </nav>
          <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            {page.h1}
          </h1>
          <p className="mb-6 max-w-2xl text-lg text-text-on-dark/95">
            {page.description}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 font-bold text-white transition hover:bg-accent-hover"
              aria-label="Hemen ara"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              {SITE.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-bold text-white transition hover:bg-[#20bd5a]"
              aria-label="WhatsApp ile yaz"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4">
          {page.sections.map((section, i) => (
            <div key={i} className="mb-10">
              <h2 className="mb-4 text-xl font-bold text-brand md:text-2xl">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, j) => (
                <p key={j} className="mb-4 leading-relaxed text-text">
                  {p}
                </p>
              ))}
            </div>
          ))}

          <div className="mb-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border p-6">
              <h3 className="mb-2 font-bold text-brand">7/24 Hizmet</h3>
              <p className="text-sm text-text">
                Gece gündüz, hafta sonu ve bayram günleri kesintisiz çilingir
                hizmeti.
              </p>
            </div>
            <div className="rounded-xl border border-border p-6">
              <h3 className="mb-2 font-bold text-brand">Hızlı Müdahale</h3>
              <p className="text-sm text-text">
                Gemlik genelinde ortalama 15-30 dakika içinde adresinizde.
              </p>
            </div>
            <div className="rounded-xl border border-border p-6">
              <h3 className="mb-2 font-bold text-brand">Hasarsız Açma</h3>
              <p className="text-sm text-text">
                Profesyonel ekipmanlarla kapı ve kilide zarar vermeden açma.
              </p>
            </div>
            <div className="rounded-xl border border-border p-6">
              <h3 className="mb-2 font-bold text-brand">Şeffaf Fiyat</h3>
              <p className="text-sm text-text">
                İşlem öncesi fiyat bilgisi, gizli ücret yok.
              </p>
            </div>
          </div>

          {page.faqs.length > 0 && (
            <div className="mb-10">
              <h2 className="mb-6 text-xl font-bold text-brand md:text-2xl">
                Sık Sorulan Sorular
              </h2>
              <div className="space-y-4">
                {page.faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group rounded-xl border border-border bg-surface-muted p-4"
                  >
                    <summary className="cursor-pointer font-semibold text-brand">
                      {faq.q}
                    </summary>
                    <p className="mt-3 text-text">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          )}

          {page.relatedLinks.length > 0 && (
            <div className="mb-10 rounded-xl bg-surface-muted p-6">
              <h3 className="mb-4 text-lg font-bold text-brand">
                İlgili Sayfalar
              </h3>
              <ul className="flex flex-wrap gap-2">
                {page.relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block rounded-lg bg-white px-3 py-2 text-sm font-medium text-brand shadow transition hover:bg-accent hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="rounded-xl bg-brand p-8 text-center text-white">
            <p className="mb-4 text-lg font-semibold">
              Hemen arayın, dakikalar içinde kapınızdayız!
            </p>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 font-bold text-white transition hover:bg-accent-hover"
            >
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <div className="h-24 md:h-32" aria-hidden="true" />
    </article>
  );
}
