import Image from "next/image";
import { SITE } from "@/lib/constants";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata = {
  title: "Kasa Çilingir",
  description:
    "Mustafakemalpaşa ve Karacabey kasa çilingir hizmeti. Kasa açma, şifre sıfırlama, elektronik kasa tamiri. İşletme ve ev için güvenilir çözümler. 0541 343 34 90",
  openGraph: {
    title: "Kasa Çilingir | Paşa Çilingir",
    description:
      "Mustafakemalpaşa ve Karacabey kasa çilingir - Kasa açma, şifre sıfırlama.",
    images: ["/logo.png"],
  },
};

export default function KasaCilingirPage() {
  return (
    <ServiceLayout
      title="Mustafakemalpaşa & Karacabey Kasa Çilingir"
      description="Mustafakemalpaşa ve Karacabey kasa çilingir hizmeti ile kasa açma, şifre sıfırlama ve elektronik kasa tamiri. İşletmeniz veya eviniz için güvenilir çözümler."
      imageSrc="/images/clg-img-5.webp"
      imageAlt="Kasa çilingir hizmeti"
    >
      <div className="mx-auto max-w-2xl space-y-8 text-[#2E2E2E]">
        <div className="overflow-hidden rounded-xl">
          <Image
            src="/images/clg-img-5.webp"
            alt="Kasa çilingir Mustafakemalpaşa Karacabey"
            width={800}
            height={450}
            className="h-auto max-h-80 w-full object-cover"
            loading="lazy"
          />
        </div>
        <p className="text-lg leading-relaxed">
          Mustafakemalpaşa ve Karacabey kasa çilingir hizmeti. Kasa açılmıyor mu?
          Şifreyi mi unuttunuz? İşletmeniz veya eviniz için profesyonel kasa
          çilingir hizmeti. Hız, güven ve deneyimle yanınızdayız.
        </p>
        <h2 className="text-xl font-bold text-[#0A2540]">
          Kasa Çilingir Hizmetleri
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Kasa açma (şifre unutuldu)</li>
          <li>Şifre sıfırlama</li>
          <li>Elektronik kasa tamiri</li>
          <li>Mekanik kasa tamiri</li>
          <li>Kasa anahtarı yapımı</li>
        </ul>
        <h2 className="text-xl font-bold text-[#0A2540]">
          Güvenilir Çilingir Hizmeti
        </h2>
        <p className="text-[#2E2E2E]">
          Kasa işlemlerinde güven ön planda. Mustafakemalpaşa ve Karacabey
          genelinde profesyonel ekipman ve yılların deneyimiyle 7/24 hizmet
          veriyoruz. Acil kasa açma ihtiyacınızda hemen arayın.
        </p>
        <div className="rounded-xl bg-gray-50 p-6">
          <p className="mb-4 font-semibold text-[#0A2540]">
            Kasa sorunu mu var? Hemen arayın!
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
