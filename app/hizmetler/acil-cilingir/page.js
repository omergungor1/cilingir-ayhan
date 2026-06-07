import Image from "next/image";
import { SITE } from "@/lib/constants";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata = {
  title: "Acil Çilingir",
  description:
    "Acil çilingir hizmeti 7/24. Mustafakemalpaşa ve Karacabey genelinde gece gündüz dakikalar içinde kapınızdayız. Hemen arayın: 0541 343 34 90",
  openGraph: {
    title: "Acil Çilingir | Paşa Çilingir",
    description:
      "Acil çilingir - Mustafakemalpaşa ve Karacabey'de 7/24 yanınızdayız.",
    images: ["/logo.png"],
  },
};

export default function AcilCilingirPage() {
  return (
    <ServiceLayout
      title="Acil Çilingir - Mustafakemalpaşa & Karacabey"
      description="Acil çilingir ihtiyacınızda 7/24 yanınızdayız. Mustafakemalpaşa ve Karacabey genelinde gece gündüz dakikalar içinde adresinizde."
      imageSrc="/images/clg-img-3.webp"
      imageAlt="Acil çilingir hizmeti"
    >
      <div className="mx-auto max-w-2xl space-y-8 text-[#2E2E2E]">
        <div className="overflow-hidden rounded-xl">
          <Image
            src="/images/clg-img-3.webp"
            alt="Acil çilingir Mustafakemalpaşa Karacabey"
            width={800}
            height={450}
            className="h-auto max-h-80 w-full object-cover"
            loading="lazy"
          />
        </div>
        <p className="text-lg leading-relaxed">
          Acil çilingir mi lazım? Hemen arayın. Mustafakemalpaşa ve Karacabey
          genelinde gece yarısı, bayram, tatil fark etmez. 7/24 çilingir ekibimiz
          her an hazır.
        </p>
        <h2 className="text-xl font-bold text-[#0A2540]">
          Acil Çilingir Ne Zaman Gerekir?
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Anahtar evde kaldı, kapı kilitli</li>
          <li>Kilit bozuldu, eve giremiyorsunuz</li>
          <li>Araç anahtarı araçta kaldı</li>
          <li>Kasa açılmıyor</li>
          <li>Gece yarısı kilit sorunu</li>
        </ul>
        <h2 className="text-xl font-bold text-[#0A2540]">
          Neden Acil Çilingir?
        </h2>
        <p className="text-[#2E2E2E]">
          Hemen arayın, dakikalar içinde kapınızdayız. Mustafakemalpaşa ve
          Karacabey genelinde 7/24 hizmet. Hız, güven ve deneyimle yanınızdayız.
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
