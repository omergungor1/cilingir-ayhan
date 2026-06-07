import Link from "next/link";

export const metadata = {
  title: "Gizlilik Politikası",
  description:
    "Paşa Çilingir gizlilik politikası. Kişisel verilerinizin korunması hakkında bilgi edinin.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function GizlilikPolitikasiPage() {
  return (
    <article>
      <section className="bg-[#0A2540] py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <nav className="mb-4 text-sm text-white/80" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#F5B301]">
              Ana Sayfa
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#F5B301]">Gizlilik Politikası</span>
          </nav>
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Gizlilik Politikası
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="prose prose-lg max-w-none text-[#2E2E2E]">
            <p className="lead">
              Bu gizlilik politikası, Paşa Çilingir olarak kişisel verilerinizi
              nasıl topladığımızı, kullandığımızı ve koruduğumuzu açıklar.
            </p>

            <h2>1. Toplanan Bilgiler</h2>
            <p>
              Web sitemizi ziyaret ettiğinizde veya bizimle iletişime geçtiğinizde
              aşağıdaki bilgileri toplayabiliriz:
            </p>
            <ul>
              <li>İletişim bilgileri (telefon, e-posta)</li>
              <li>IP adresi ve cihaz bilgileri</li>
              <li>Çerez verileri</li>
            </ul>

            <h2>2. Bilgilerin Kullanımı</h2>
            <p>
              Topladığımız bilgiler hizmet sunumu, iletişim ve yasal yükümlülüklerimizi
              yerine getirmek için kullanılır.
            </p>

            <h2>3. Bilgi Paylaşımı</h2>
            <p>
              Kişisel verilerinizi üçüncü taraflarla paylaşmayız, yasal zorunluluklar
              hariç.
            </p>

            <h2>4. Veri Güvenliği</h2>
            <p>
              Verilerinizi korumak için uygun teknik ve idari önlemleri alıyoruz.
            </p>

            <h2>5. Haklarınız</h2>
            <p>
              KVKK kapsamında veri erişimi, düzeltme, silme ve itiraz haklarınız
              bulunmaktadır. Detaylar için{" "}
              <Link href="/kvkk" className="text-[#F5B301] hover:underline">
                KVKK sayfamızı
              </Link>{" "}
              inceleyebilirsiniz.
            </p>

            <h2>6. İletişim</h2>
            <p>
              Gizlilik ile ilgili sorularınız için{" "}
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
