import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A2540] text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold text-[#F5B301]">
              Paşa Çilingir
            </h3>
            <p className="text-sm text-white/90">
              7/24 Mustafakemalpaşa ve Karacabey çilingir hizmeti. Ev, oto, kasa
              çilingir. Dakikalar içinde kapınızdayız.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-[#F5B301]">
              Hızlı Linkler
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/hizmetler" className="hover:text-[#F5B301]">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/ev-cilingir" className="hover:text-[#F5B301]">
                  Ev Çilingir
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/acil-cilingir" className="hover:text-[#F5B301]">
                  Acil Çilingir
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/oto-cilingir" className="hover:text-[#F5B301]">
                  Oto Çilingir
                </Link>
              </li>
              <li>
                <Link href="/hizmet-bolgelerimiz" className="hover:text-[#F5B301]">
                  Hizmet Bölgelerimiz
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#F5B301]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-[#F5B301]">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-[#F5B301]">İletişim</h3>
            <p className="text-sm text-white/90">
              Barış mahallesi, Fatih Cd. No:16
              <br />
              16535 Mustafakemalpaşa/Bursa
            </p>
            <a
              href="tel:+905413433490"
              className="mt-2 inline-block font-bold text-[#F5B301] hover:underline"
            >
              0541 343 34 90
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-4 border-t border-white/20 pt-8 text-sm">
          <Link href="/sitemap.xml" className="hover:text-[#F5B301]">
            Sitemap
          </Link>
          <Link href="/gizlilik-politikasi" className="hover:text-[#F5B301]">
            Gizlilik Politikası
          </Link>
          <Link href="/kvkk" className="hover:text-[#F5B301]">
            KVKK
          </Link>
          <Link href="/cerez-politikasi" className="hover:text-[#F5B301]">
            Çerez Politikası
          </Link>
        </div>
        <p className="mt-4 text-center text-sm text-white/70">
          © {currentYear} Paşa Çilingir. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
