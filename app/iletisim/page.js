import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata = {
  title: "İletişim",
  description:
    "Paşa Çilingir iletişim. Telefon: 0541 343 34 90. Adres: Barış mahallesi, Fatih Cd. No:16, Mustafakemalpaşa/Bursa. 7/24 ulaşın.",
  openGraph: {
    title: "İletişim | Paşa Çilingir",
    description: "Mustafakemalpaşa ve Karacabey çilingir iletişim bilgileri.",
    images: ["/logo.png"],
  },
};

export default function IletisimPage() {
  return (
    <article>
      <section className="bg-[#0A2540] py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <nav className="mb-4 text-sm text-white/80" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#F5B301]">
              Ana Sayfa
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#F5B301]">İletişim</span>
          </nav>
          <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            İletişim
          </h1>
          <p className="max-w-2xl text-lg text-white/90">
            Mustafakemalpaşa ve Karacabey çilingir hizmeti için bize ulaşın. Bir
            telefon kadar uzağınızdayız.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-gray-50 p-8">
              <h2 className="mb-4 text-xl font-bold text-[#0A2540]">
                Telefon
              </h2>
              <a
                href={`tel:${SITE.phone}`}
                className="text-2xl font-bold text-[#F5B301] hover:underline"
              >
                {SITE.phoneDisplay}
              </a>
              <p className="mt-2 text-[#2E2E2E]">
                7/24 arayabilirsiniz. Hemen arayın, dakikalar içinde
                kapınızdayız.
              </p>
            </div>
            <div className="rounded-xl bg-gray-50 p-8">
              <h2 className="mb-4 text-xl font-bold text-[#0A2540]">
                WhatsApp
              </h2>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-[#25D366] hover:underline"
              >
                WhatsApp ile Yaz
              </a>
              <p className="mt-2 text-[#2E2E2E]">
                Tek tıkla mesaj gönderin. Hızlı yanıt garantisi.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-gray-50 p-8">
            <h2 className="mb-4 text-xl font-bold text-[#0A2540]">Adres</h2>
            <p className="text-lg text-[#2E2E2E]">{SITE.address}</p>
            <a
              href={SITE.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-semibold text-[#F5B301] hover:underline"
            >
              Haritada Göster
            </a>
            <div className="mt-6 overflow-hidden rounded-xl shadow-lg">
              <iframe
                src={SITE.mapEmbed}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Paşa Çilingir - İletişim konumu"
              />
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-[#0A2540] p-8 text-center text-white">
            <p className="mb-4 text-lg font-semibold">
              Acil çilingir mi lazım? Şimdi arayın!
            </p>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-block rounded-xl bg-[#F5B301] px-8 py-4 font-bold text-[#0A2540]"
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
