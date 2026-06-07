import Image from "next/image";
import { SITE } from "@/lib/constants";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata = {
  title: "7/24 Çilingir Servisi",
  description:
    "7/24 çilingir hizmeti. Mustafakemalpaşa ve Karacabey genelinde gece yarısı, bayram, tatil fark etmez. Hemen arayın: 0541 343 34 90",
  openGraph: {
    title: "7/24 Çilingir Servisi | Paşa Çilingir",
    description:
      "7/24 çilingir - Mustafakemalpaşa ve Karacabey'de her an yanınızdayız.",
    images: ["/logo.png"],
  },
};

export default function YediYirmiDortCilingirPage() {
  return (
    <ServiceLayout
      title="7/24 Çilingir Servisi"
      description="7/24 çilingir hizmeti. Mustafakemalpaşa ve Karacabey genelinde gece yarısı, bayram, tatil fark etmez. Her an hazır."
      imageSrc="/images/clg-img-6.jpg"
      imageAlt="7/24 çilingir servisi"
    >
      <div className="mx-auto max-w-2xl space-y-8 text-[#2E2E2E]">
        <div className="overflow-hidden rounded-xl">
          <Image
            src="/images/clg-img-6.jpg"
            alt="7/24 çilingir servisi"
            width={800}
            height={450}
            className="h-auto max-h-80 w-full object-cover"
            loading="lazy"
          />
        </div>
        <p className="text-lg leading-relaxed">
          7/24 çilingir hizmeti ile Mustafakemalpaşa ve Karacabey genelinde her
          an yanınızdayız. Gece yarısı kapıda mı kaldınız? Bayramda acil çilingir
          mi lazım? Hemen arayın, dakikalar içinde kapınızdayız.
        </p>
        <h2 className="text-xl font-bold text-[#0A2540]">
          Neden 7/24 Çilingir?
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Kesintisiz hizmet - Gece gündüz</li>
          <li>Hızlı müdahale - Dakikalar içinde</li>
          <li>Deneyimli ekip - Yılların tecrübesi</li>
          <li>Uygun fiyat - Şeffaf tarife</li>
          <li>5 yıldız müşteri memnuniyeti</li>
        </ul>
        <h2 className="text-xl font-bold text-[#0A2540]">
          Müşteri Değerlendirmeleri
        </h2>
        <p className="text-[#2E2E2E]">
          Google yorumlarında 5.0 puan ve 48 müşteri değerlendirmesi. Acil
          çilingir mi lazım? Şimdi arayın. Ev, oto, kasa - tüm çilingir
          ihtiyaçlarınızda Mustafakemalpaşa ve Karacabey genelinde 7/24 hizmet.
        </p>
        <div className="rounded-xl bg-[#0A2540] p-6 text-white">
          <p className="mb-4 text-lg font-semibold">
            Acil çilingir mi lazım? Şimdi arayın!
          </p>
          <a
            href={`tel:${SITE.phone}`}
            className="inline-block rounded-lg bg-[#F5B301] px-6 py-3 font-bold text-[#0A2540]"
          >
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </ServiceLayout>
  );
}
