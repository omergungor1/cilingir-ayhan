import Link from "next/link";
import { SITE, GEMLIK_MAHALLELER, HIZMETLER } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold text-accent">
              {SITE.name}
            </h3>
            <p className="text-sm text-text-on-dark/95">
              Gemlik&apos;te 7/24 acil çilingir hizmeti. Ev, oto, kasa çilingir.
              Dakikalar içinde kapınızdayız.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-accent">Hizmetler</h3>
            <ul className="space-y-2 text-sm">
              {HIZMETLER.map((h) => (
                <li key={h.slug}>
                  <Link
                    href={`/gemlik-${h.slug}-cilingir`}
                    className="hover:text-accent"
                  >
                    {h.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-accent">Mahalleler</h3>
            <ul className="space-y-2 text-sm">
              {GEMLIK_MAHALLELER.slice(0, 6).map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/${m.slug}-cilingir`}
                    className="hover:text-accent"
                  >
                    {m.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-accent">İletişim</h3>
            <p className="text-sm text-text-on-dark/95">{SITE.address}</p>
            <a
              href={`tel:${SITE.phone}`}
              className="mt-2 inline-block font-bold text-accent hover:underline"
            >
              {SITE.phoneDisplay}
            </a>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/hakkimizda" className="hover:text-accent">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-accent">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-accent">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-4 border-t border-white/20 pt-8 text-sm">
          <Link href="/sitemap.xml" className="hover:text-accent">
            Sitemap
          </Link>
          <Link href="/gizlilik-politikasi" className="hover:text-accent">
            Gizlilik Politikası
          </Link>
          <Link href="/kvkk" className="hover:text-accent">
            KVKK
          </Link>
          <Link href="/cerez-politikasi" className="hover:text-accent">
            Çerez Politikası
          </Link>
        </div>
        <p className="mt-4 text-center text-sm text-text-on-dark/75">
          © {currentYear} {SITE.name}. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
