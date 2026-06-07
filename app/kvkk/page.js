import Link from "next/link";

export const metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "Paşa Çilingir KVKK aydınlatma metni. Kişisel verilerinizin işlenmesi hakkında bilgilendirme.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function KvkkPage() {
  return (
    <article>
      <section className="bg-[#0A2540] py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <nav className="mb-4 text-sm text-white/80" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#F5B301]">
              Ana Sayfa
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#F5B301]">KVKK</span>
          </nav>
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            KVKK Aydınlatma Metni
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="prose prose-lg max-w-none text-[#2E2E2E]">
            <p className="lead">
              6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında
              veri sorumlusu sıfatıyla kişisel verilerinizi işlemekteyiz.
            </p>

            <h2>1. Veri Sorumlusu</h2>
            <p>
              Paşa Çilingir olarak kişisel verilerinizin işlenmesinden sorumluyuz.
            </p>

            <h2>2. İşlenen Kişisel Veriler</h2>
            <p>Hizmet sunumu kapsamında aşağıdaki veriler işlenebilir:</p>
            <ul>
              <li>Kimlik bilgileri (ad, soyad)</li>
              <li>İletişim bilgileri (telefon, adres, e-posta)</li>
              <li>Lokasyon verileri (hizmet adresi)</li>
            </ul>

            <h2>3. İşleme Amaçları</h2>
            <p>
              Verileriniz çilingir hizmeti sunumu, randevu yönetimi, müşteri
              ilişkileri ve yasal yükümlülükler için işlenmektedir.
            </p>

            <h2>4. Hukuki Sebepler</h2>
            <p>
              Veri işleme faaliyetlerimiz KVKK&apos;nın 5. ve 6. maddelerinde
              belirtilen hukuki sebeplere dayanmaktadır.
            </p>

            <h2>5. Veri Saklama Süresi</h2>
            <p>
              Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve
              yasal saklama sürelerine uygun olarak muhafaza edilir.
            </p>

            <h2>6. Haklarınız</h2>
            <p>KVKK&apos;nın 11. maddesi kapsamında:</p>
            <ul>
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>İşlenmişse buna ilişkin bilgi talep etme</li>
              <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
              <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
              <li>Silinmesini veya yok edilmesini isteme</li>
              <li>İtiraz etme ve şikayette bulunma haklarına sahipsiniz</li>
            </ul>

            <h2>7. Başvuru</h2>
            <p>
              Haklarınızı kullanmak için{" "}
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
