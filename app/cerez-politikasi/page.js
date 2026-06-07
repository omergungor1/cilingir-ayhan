import Link from "next/link";

export const metadata = {
  title: "Çerez Politikası",
  description:
    "Paşa Çilingir çerez politikası. Web sitemizde kullanılan çerezler hakkında bilgi.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function CerezPolitikasiPage() {
  return (
    <article>
      <section className="bg-[#0A2540] py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <nav className="mb-4 text-sm text-white/80" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#F5B301]">
              Ana Sayfa
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#F5B301]">Çerez Politikası</span>
          </nav>
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Çerez Politikası
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="prose prose-lg max-w-none text-[#2E2E2E]">
            <p className="lead">
              Bu çerez politikası, pasacilingir.com web sitesinde kullanılan
              çerezler hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.
            </p>

            <h2>1. Çerez Nedir?</h2>
            <p>
              Çerezler, web sitelerinin cihazınıza kaydettiği küçük metin
              dosyalarıdır. Ziyaretinizi daha iyi bir deneyim sunmak için
              kullanılır.
            </p>

            <h2>2. Kullandığımız Çerezler</h2>
            <ul>
              <li>
                <strong>Zorunlu çerezler:</strong> Site işlevselliği için gerekli
              </li>
              <li>
                <strong>Analitik çerezler:</strong> Site kullanımını anlamak için
              </li>
              <li>
                <strong>İşlevsel çerezler:</strong> Tercihlerinizi hatırlamak için
              </li>
            </ul>

            <h2>3. Çerez Yönetimi</h2>
            <p>
              Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilir veya
              silebilirsiniz. Ancak bu, bazı site özelliklerinin çalışmamasına
              neden olabilir.
            </p>

            <h2>4. Üçüncü Taraf Çerezleri</h2>
            <p>
              Google Maps gibi harici hizmetler kendi çerezlerini kullanabilir.
              Bu hizmetlerin gizlilik politikalarını incelemenizi öneririz.
            </p>

            <h2>5. İletişim</h2>
            <p>
              Çerez politikası hakkında sorularınız için{" "}
              <Link href="/iletisim" className="text-[#F5B301] hover:underline">
                iletişim sayfamızdan
              </Link>{" "}
              bize ulaşabilirsiniz.
            </p>

            <p className="mt-8 text-sm text-gray-600">
              Son güncelleme: Şubat 2025
            </p>
          </div>
        </div>
      </section>

      <div className="h-24 md:h-32" aria-hidden="true" />
    </article>
  );
}
