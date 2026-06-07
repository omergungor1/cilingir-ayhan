import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Hizmetlerimiz",
  description:
    "Mustafakemalpaşa ve Karacabey çilingir hizmetleri: Ev çilingir, acil çilingir, oto çilingir, kasa çilingir, 7/24 çilingir. Tüm hizmetlerimiz hakkında detaylı bilgi.",
  openGraph: {
    title: "Hizmetlerimiz | Paşa Çilingir",
    description:
      "Ev, oto, kasa ve acil çilingir hizmetleri. Mustafakemalpaşa ve Karacabey genelinde 7/24.",
    images: ["/logo.png"],
  },
};

const HIZMETLER = [
  {
    slug: "ev-cilingir",
    title: "Ev Çilingir Hizmeti",
    description:
      "Mustafakemalpaşa ve Karacabey ev çilingir hizmeti ile kapınızda. Anahtar kilit sorunlarınızda hız, güven ve deneyimle yanınızdayız. Hamidiye, Barış, Gazi, Emirsultan dahil tüm mahallelere 7/24 hizmet veriyoruz.",
    image: "/images/clg-img-2.jpg",
    imageAlt: "Ev çilingir hizmeti - Mustafakemalpaşa Karacabey",
  },
  {
    slug: "acil-cilingir",
    title: "Acil Çilingir",
    description:
      "Acil çilingir ihtiyacınızda 7/24 yanınızdayız. Mustafakemalpaşa ve Karacabey genelinde gece gündüz dakikalar içinde adresinizde.",
    image: "/images/clg-img-3.webp",
    imageAlt: "Acil çilingir - Mustafakemalpaşa Karacabey",
  },
  {
    slug: "oto-cilingir",
    title: "Oto Çilingir",
    description:
      "Mustafakemalpaşa ve Karacabey oto çilingir hizmeti. Anahtar kilitte kaldı mı? Araç kilidi açılmıyor mu? Hemen arayın, profesyonel ekip dakikalar içinde yanınızda.",
    image: "/images/clg-img-4.jpg",
    imageAlt: "Oto çilingir - Mustafakemalpaşa Karacabey",
  },
  {
    slug: "kasa-cilingir",
    title: "Kasa Çilingir",
    description:
      "Mustafakemalpaşa ve Karacabey kasa çilingir hizmeti. Kasa açma, şifre sıfırlama, elektronik kasa tamiri. İşletmeniz veya eviniz için güvenilir kasa çilingir çözümleri.",
    image: "/images/clg-img-5.webp",
    imageAlt: "Kasa çilingir - Mustafakemalpaşa Karacabey",
  },
  {
    slug: "7-24-cilingir",
    title: "7/24 Çilingir Servisi",
    description:
      "7/24 çilingir hizmeti. Gece yarısı, bayram, tatil fark etmez. Mustafakemalpaşa ve Karacabey genelinde yorumlarında 5 yıldız alan ekibimiz her an hazır.",
    image: "/images/clg-img-6.jpg",
    imageAlt: "7/24 çilingir servisi - Mustafakemalpaşa Karacabey",
  },
];

export default function HizmetlerPage() {
  return (
    <article>
      <section className="bg-[#0A2540] py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <nav className="mb-4 text-sm text-white/80" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#F5B301]">
              Ana Sayfa
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#F5B301]">Hizmetler</span>
          </nav>
          <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Çilingir Hizmetlerimiz
          </h1>
          <p className="max-w-2xl text-lg text-white/90">
            Mustafakemalpaşa ve Karacabey genelinde ev, oto, kasa ve acil
            çilingir hizmetleri. 7/24 yanınızdayız.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {HIZMETLER.map((hizmet) => (
              <Link
                key={hizmet.slug}
                href={`/hizmetler/${hizmet.slug}`}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition hover:shadow-xl"
              >
                <div className="relative h-48">
                  <Image
                    src={hizmet.image}
                    alt={hizmet.imageAlt}
                    fill
                    className="object-cover transition group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h2 className="mb-2 text-xl font-bold text-[#0A2540] group-hover:text-[#F5B301] transition">
                    {hizmet.title}
                  </h2>
                  <p className="mb-4 line-clamp-3 text-[#2E2E2E]">
                    {hizmet.description}
                  </p>
                  <span className="inline-block font-semibold text-[#F5B301] group-hover:underline">
                    Detaylı bilgi →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="h-24 md:h-32" aria-hidden="true" />
    </article>
  );
}
