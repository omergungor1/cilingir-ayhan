import { SITE, GEMLIK_MAHALLELER, HIZMETLER } from "./constants";

/** Tüm SEO sayfa slug'larını üretir */
export function getAllSeoSlugs() {
  const slugs = [];

  for (const hizmet of HIZMETLER) {
    slugs.push(`gemlik-${hizmet.slug}-cilingir`);
  }

  for (const mahalle of GEMLIK_MAHALLELER) {
    slugs.push(`${mahalle.slug}-cilingir`);
    for (const hizmet of HIZMETLER) {
      slugs.push(`gemlik-${mahalle.slug}-${hizmet.slug}-cilingir`);
    }
  }

  return slugs;
}

function getMahalleBySlug(slug) {
  return GEMLIK_MAHALLELER.find((m) => m.slug === slug) || null;
}

function getHizmetBySlug(slug) {
  return HIZMETLER.find((h) => h.slug === slug) || null;
}

/** Slug'dan sayfa tipini ve verisini çözümler */
export function getPageBySlug(slug) {
  const mainMatch = slug.match(/^gemlik-(724|acil|oto|kasa)-cilingir$/);
  if (mainMatch) {
    const hizmet = getHizmetBySlug(mainMatch[1]);
    if (!hizmet) return null;
    return buildMainServicePage(hizmet);
  }

  const mahalleLandingMatch = slug.match(/^(.+)-cilingir$/);
  if (mahalleLandingMatch && !slug.startsWith("gemlik-")) {
    const mahalle = getMahalleBySlug(mahalleLandingMatch[1]);
    if (!mahalle) return null;
    return buildMahalleLandingPage(mahalle);
  }

  const comboMatch = slug.match(/^gemlik-(.+)-(724|acil|oto|kasa)-cilingir$/);
  if (comboMatch) {
    const mahalle = getMahalleBySlug(comboMatch[1]);
    const hizmet = getHizmetBySlug(comboMatch[2]);
    if (!mahalle || !hizmet) return null;
    return buildComboPage(mahalle, hizmet);
  }

  return null;
}

function buildMainServicePage(hizmet) {
  const slug = `gemlik-${hizmet.slug}-cilingir`;
  const h1 = `Gemlik ${hizmet.label}`;
  const title = `${h1} | Gemlik Çilingir — 7/24 Hizmet`;
  const description = `Gemlik ${hizmet.keyword} hizmeti. Acil kapı açma, oto ve kasa çilingir. 7/24 profesyonel ekip. Hemen ara: ${SITE.phoneDisplay}`;

  return {
    type: "main-service",
    slug,
    h1,
    title,
    description,
    hizmet,
    mahalle: null,
    breadcrumbs: [
      { name: "Ana Sayfa", href: "/" },
      { name: hizmet.label, href: `/${slug}` },
    ],
    relatedLinks: [
      ...HIZMETLER.filter((h) => h.slug !== hizmet.slug).map((h) => ({
        label: `Gemlik ${h.label}`,
        href: `/gemlik-${h.slug}-cilingir`,
      })),
      ...GEMLIK_MAHALLELER.slice(0, 6).map((m) => ({
        label: `Gemlik ${m.shortName} ${hizmet.label}`,
        href: `/gemlik-${m.slug}-${hizmet.slug}-cilingir`,
      })),
    ],
    faqs: buildMainServiceFaqs(hizmet),
    sections: buildMainServiceSections(hizmet),
  };
}

function buildMahalleLandingPage(mahalle) {
  const slug = `${mahalle.slug}-cilingir`;
  const h1 = `Gemlik ${mahalle.name} Çilingir`;
  const title = `${mahalle.name} Çilingir | Gemlik — 7/24 Hizmet`;
  const description = `Gemlik ${mahalle.shortName} çilingir hizmeti. 7/24 acil kapı açma, oto ve kasa çilingir. Hemen ara: ${SITE.phoneDisplay}`;

  return {
    type: "mahalle-landing",
    slug,
    h1,
    title,
    description,
    hizmet: null,
    mahalle,
    breadcrumbs: [
      { name: "Ana Sayfa", href: "/" },
      { name: `${mahalle.name} Çilingir`, href: `/${slug}` },
    ],
    relatedLinks: [
      ...HIZMETLER.map((h) => ({
        label: `Gemlik ${mahalle.shortName} ${h.label}`,
        href: `/gemlik-${mahalle.slug}-${h.slug}-cilingir`,
      })),
      ...GEMLIK_MAHALLELER.filter((m) => m.slug !== mahalle.slug)
        .slice(0, 5)
        .map((m) => ({
          label: `${m.name} Çilingir`,
          href: `/${m.slug}-cilingir`,
        })),
    ],
    faqs: buildMahalleFaqs(mahalle),
    sections: buildMahalleSections(mahalle),
  };
}

function buildComboPage(mahalle, hizmet) {
  const slug = `gemlik-${mahalle.slug}-${hizmet.slug}-cilingir`;
  const h1 = `Gemlik ${mahalle.name} ${hizmet.label}`;
  const title = `${h1} | Gemlik Çilingir — 7/24`;
  const description = `Gemlik ${mahalle.shortName} ${hizmet.keyword}. Profesyonel çilingir, hızlı müdahale. Hemen ara: ${SITE.phoneDisplay}`;

  return {
    type: "combo",
    slug,
    h1,
    title,
    description,
    hizmet,
    mahalle,
    breadcrumbs: [
      { name: "Ana Sayfa", href: "/" },
      { name: hizmet.label, href: `/gemlik-${hizmet.slug}-cilingir` },
      { name: `${mahalle.name} ${hizmet.label}`, href: `/${slug}` },
    ],
    relatedLinks: [
      ...HIZMETLER.filter((h) => h.slug !== hizmet.slug).map((h) => ({
        label: `Gemlik ${mahalle.shortName} ${h.label}`,
        href: `/gemlik-${mahalle.slug}-${h.slug}-cilingir`,
      })),
      { label: `Gemlik ${hizmet.label}`, href: `/gemlik-${hizmet.slug}-cilingir` },
      { label: `${mahalle.name} Çilingir`, href: `/${mahalle.slug}-cilingir` },
      ...GEMLIK_MAHALLELER.filter((m) => m.slug !== mahalle.slug)
        .slice(0, 4)
        .map((m) => ({
          label: `Gemlik ${m.shortName} ${hizmet.label}`,
          href: `/gemlik-${m.slug}-${hizmet.slug}-cilingir`,
        })),
    ],
    faqs: buildComboFaqs(mahalle, hizmet),
    sections: buildComboSections(mahalle, hizmet),
  };
}

function buildMainServiceFaqs(hizmet) {
  const faqMap = {
    "724": [
      { q: "Gemlik'te 7/24 çilingir hizmeti gerçekten kesintisiz mi?", a: "Evet. Gemlik Çilingir Ayhan olarak haftanın 7 günü, günün 24 saati tüm Gemlik mahallelerine hizmet veriyoruz. Gece yarısı, bayram veya resmi tatil fark etmez; aradığınız anda ekip yola çıkar." },
      { q: "7/24 çilingir hizmeti hangi mahallelere ulaşıyor?", a: "Eşref Dinçer, Kayhan, Umurbey, Cumhuriyet, Hisar, Balıkpazarı, Osmaniye, Hamidiye, Yeni Mahalle, Kumla, Kumsaz ve Kursunlu dahil Gemlik'in tüm mahallelerine 7/24 ulaşıyoruz." },
      { q: "Gece çilingir hizmeti ek ücretli mi?", a: "Gece saatlerinde hizmet veriyoruz ve fiyatlarımızı aramadan önce şeffaf şekilde paylaşıyoruz. Sürpriz ücret yoktur; işlem öncesi bilgi alırsınız." },
      { q: "Ortalama ne kadar sürede geliyorsunuz?", a: "Gemlik merkez ve çevre mahallelerde ortalama 15-30 dakika içinde adresinizde oluyoruz. Yoğunluk ve konuma göre süre değişebilir; aradığınızda net tahmin verilir." },
    ],
    acil: [
      { q: "Gemlik'te acil çilingir ne zaman gerekir?", a: "Anahtar evde kaldığında, kapı kilitlendiğinde, kilit bozulduğunda veya acil müdahale gerektiğinde Gemlik acil çilingir hizmetimizi arayabilirsiniz." },
      { q: "Kapıyı hasar vermeden açabiliyor musunuz?", a: "Evet. Profesyonel ekipmanlarımızla kapı ve kilide zarar vermeden açma işlemi yapıyoruz. Zorlama veya kırma yöntemleri kullanmıyoruz." },
      { q: "Acil çilingir hizmeti kaç dakikada gelir?", a: "Gemlik genelinde ortalama 15-30 dakika içinde adresinize ulaşıyoruz. Acil durumlarda öncelik vererek en hızlı şekilde yola çıkıyoruz." },
      { q: "Acil çilingir fiyatları nasıl belirlenir?", a: "Fiyat kilit tipi, kapı türü ve hizmet saatine göre değişir. Aramadan önce veya adrese gelmeden önce şeffaf fiyat bilgisi paylaşılır." },
    ],
    oto: [
      { q: "Gemlik oto çilingir hangi marka araçlara hizmet verir?", a: "Çoğu yerli ve yabancı marka araç için oto çilingir hizmeti sunuyoruz. Aracınızın marka ve modelini belirterek arayabilirsiniz." },
      { q: "Araç anahtarı araçta kaldıysa ne yapmalıyım?", a: "Hemen bizi arayın. Gemlik oto çilingir ekibimiz adresinize gelerek aracınızı hasarsız şekilde açar." },
      { q: "Çipli anahtar kopyalama yapıyor musunuz?", a: "Evet. Immobilizer ve çipli anahtar kopyalama, programlama hizmetleri sunuyoruz. Marka ve modele göre işlem süresi değişebilir." },
      { q: "Oto çilingir hizmeti yerinde mi veriliyor?", a: "Evet. Araç nerede kaldıysa oraya gelerek kapı açma ve gerekirse anahtar işlemlerini yerinde gerçekleştiriyoruz." },
    ],
    kasa: [
      { q: "Gemlik kasa çilingir hangi kasa türlerine hizmet verir?", a: "Mekanik ve elektronik kasalar, ev ve işyeri kasaları için açma, şifre sıfırlama ve tamir hizmeti sunuyoruz." },
      { q: "Kasa şifresini unuttum, ne yapmalıyım?", a: "Profesyonel kasa çilingir ekibimizi arayın. Kasanıza zarar vermeden açma veya şifre sıfırlama işlemi yapılabilir." },
      { q: "Kasa açma işlemi ne kadar sürer?", a: "Kasa tipine göre değişmekle birlikte çoğu işlem 30-60 dakika içinde tamamlanır. Aramada kasa modelinizi belirtirseniz net süre verilir." },
      { q: "İşyeri kasası için de hizmet veriyor musunuz?", a: "Evet. Gemlik'teki işletmeler için kasa açma, kilit değişimi ve güvenlik danışmanlığı hizmetleri sunuyoruz." },
    ],
  };
  return faqMap[hizmet.slug] || [];
}

function buildMahalleFaqs(mahalle) {
  return [
    { q: `${mahalle.name} çilingir hizmeti 7/24 mi?`, a: `Evet. Gemlik ${mahalle.shortName} bölgesinde gece gündüz kesintisiz çilingir hizmeti veriyoruz.` },
    { q: `${mahalle.shortName} bölgesine ne kadar sürede geliyorsunuz?`, a: `Gemlik ${mahalle.shortName} ve çevre mahallelerde ortalama 15-30 dakika içinde adresinizde oluyoruz.` },
    { q: `${mahalle.name} için hangi hizmetleri sunuyorsunuz?`, a: "Kapı açma, kilit değişimi, oto çilingir, kasa çilingir ve acil müdahale hizmetleri sunuyoruz." },
    { q: "Fiyatlar şeffaf mı?", a: "Evet. İşlem öncesi fiyat bilgisi paylaşılır; gizli veya sürpriz ücret uygulanmaz." },
  ];
}

function buildComboFaqs(mahalle, hizmet) {
  return [
    { q: `Gemlik ${mahalle.shortName} ${hizmet.keyword} hizmeti nasıl alınır?`, a: `${SITE.phoneDisplay} numarasını arayarak veya WhatsApp üzerinden yazarak hizmet talep edebilirsiniz. Ekip en kısa sürede ${mahalle.shortName} bölgesine yönlendirilir.` },
    { q: `${mahalle.name} bölgesinde ortalama müdahale süresi nedir?`, a: `Gemlik ${mahalle.shortName} ve yakın mahallelerde ortalama 15-30 dakika içinde adresinizde oluyoruz.` },
    { q: `${hizmet.label} hizmeti hangi durumlarda gerekir?`, a: hizmet.description },
    { q: "Hasarsız açma garantisi var mı?", a: "Profesyonel ekipmanlarla kapı, araç ve kasaya zarar vermeden açma işlemi yapıyoruz." },
  ];
}

function buildMainServiceSections(hizmet) {
  const intro = {
    "724": `Gemlik'te 7/24 çilingir hizmeti arayanlar için Gemlik Çilingir Ayhan, Bursa'nın sahil ilçesi Gemlik'te kesintisiz profesyonel çilingir desteği sunar. Gece yarısı kapıda kaldığınızda, hafta sonu kilit arızası yaşadığınızda veya bayram günü acil müdahale gerektiğinde tek yapmanız gereken aramak. Eşref Dinçer Mahallesi merkezli ekibimiz, Gemlik'in tüm mahallelerine hızlı ulaşım sağlar.`,
    acil: `Gemlik acil çilingir hizmeti, beklenmedik kilit sorunlarında hızlı ve güvenilir çözüm sunar. Anahtarınız evde kaldıysa, kapı aniden kilitlendiyse veya güvenlik kilidiniz arızalandıysa panik yapmanıza gerek yok. Gemlik Çilingir Ayhan ekibi, hasarsız açma teknikleriyle dakikalar içinde yanınızda.`,
    oto: `Gemlik oto çilingir hizmeti, araç sahiplerinin en sık yaşadığı sorunlara profesyonel çözüm sunar. Anahtar araçta kaldığında, uzaktan kumanda çalışmadığında veya çipli anahtar kaybolduğunda Gemlik genelinde yerinde müdahale yapıyoruz.`,
    kasa: `Gemlik kasa çilingir hizmeti, ev ve işyeri kasalarında yaşanan kilit sorunlarına uzman müdahale sağlar. Şifre unutulması, mekanik arıza veya elektronik kasa hatalarında güvenilir ve hızlı çözüm sunuyoruz.`,
  };

  return [
    { heading: `${hizmet.label} Hizmeti Hakkında`, paragraphs: [
      intro[hizmet.slug],
      `Gemlik, Bursa'nın Marmara kıyısındaki önemli ilçelerinden biridir. Sahil şeridi, sanayi bölgeleri ve yoğun konut alanlarıyla farklı kilit ihtiyaçları ortaya çıkar. ${hizmet.label} hizmetimiz, bu çeşitliliğe uygun ekipman ve deneyimle sunulur. Kayhan, Umurbey, Cumhuriyet, Hisar ve diğer tüm mahallelerde aynı kalitede hizmet garantisi veriyoruz.`,
      `${SITE.name} olarak müşteri memnuniyetini ön planda tutuyoruz. Google'da ${SITE.googleRating} puan ve ${SITE.reviewCount} müşteri yorumuyla Gemlik'te güvenilir çilingir olarak hizmet veriyoruz. Şeffaf fiyat politikamız ve hızlı müdahale süremizle fark yaratıyoruz.`,
    ]},
    { heading: "Sunduğumuz Hizmetler", paragraphs: [
      `Gemlik ${hizmet.keyword} kapsamında kapı açma, kilit değişimi, çelik kapı kilidi montajı, oto kapı açma, çipli anahtar kopyalama ve kasa açma hizmetleri sunuyoruz. Her işlemde profesyonel ekipman kullanılır; amatör müdahalelerin neden olduğu hasarlar önlenir.`,
      `Konut, işyeri, villa ve apartman dairelerinde farklı kilit sistemleriyle çalışıyoruz. Çok noktalı kilitler, silindir kilitler, elektronik kilitler ve akıllı kilit sistemlerinde deneyimli teknisyenlerimiz görev alır.`,
      `Acil durumlarda öncelikli müdahale sağlıyoruz. Özellikle gece saatlerinde veya hafta sonlarında hızlı ulaşım için Gemlik merkez ve çevre mahallelerde optimize edilmiş rota planlaması yapıyoruz.`,
    ]},
    { heading: "Neden Gemlik Çilingir Ayhan?", paragraphs: [
      `Yılların deneyimiyle Gemlik'te binlerce başarılı müdahale gerçekleştirdik. 7/24 kesintisiz hizmet, şeffaf fiyatlandırma ve hasarsız açma garantisi temel prensiplerimizdir.`,
      `Müşterilerimizden gelen olumlu geri bildirimler, hizmet kalitemizin en güçlü kanıtıdır. Acil durumlarda sakin kalmanızı sağlayacak hızlı ve güvenilir bir ekip sunuyoruz.`,
      `Eşref Dinçer Mahallesi'ndeki merkezimizden Gemlik'in her noktasına ulaşım sağlıyoruz. Kumla sahil bölgesinden Kursunlu'ya, Hisar'dan Balıkpazarı'na kadar tüm mahalleler hizmet kapsamımızdadır.`,
    ]},
    { heading: "Hizmet Bölgelerimiz", paragraphs: [
      `Gemlik'in tüm mahallelerinde ${hizmet.keyword} hizmeti veriyoruz: Eşref Dinçer, Kayhan, Umurbey, Cumhuriyet, Hisar, Balıkpazarı, Osmaniye, Hamidiye, Yeni Mahalle, Kumla, Kumsaz ve Kursunlu.`,
      `Her mahalle için özel landing sayfalarımız mevcuttur. Bulunduğunuz mahalledeki hizmet detaylarına ilgili sayfalardan ulaşabilirsiniz.`,
      `Gemlik dışından gelen müşteriler için de Bursa genelinde belirli bölgelere hizmet verebiliyoruz. Detaylı bilgi için ${SITE.phoneDisplay} numarasından bize ulaşın.`,
    ]},
    { heading: "İletişim ve Hizmet Talebi", paragraphs: [
      `Hizmet almak için ${SITE.phoneDisplay} numarasını arayabilir veya WhatsApp üzerinden mesaj gönderebilirsiniz. Adresinizi ve sorununuzu kısaca anlatmanız yeterlidir; ekip hemen yola çıkar.`,
      `Fiyat bilgisi için aramadan önce kilit tipi veya sorun hakkında bilgi vermeniz net teklif almanızı kolaylaştırır. Gizli ücret veya zorunlu ek hizmet dayatmıyoruz.`,
      `Gemlik Çilingir Ayhan — güvenilir, hızlı ve profesyonel çilingir hizmeti. Bir telefon kadar uzağınızdayız.`,
    ]},
  ];
}

function buildMahalleSections(mahalle) {
  const locDesc = {
    "esref-dincer-mahallesi": "Gemlik'in merkezi mahallelerinden Eşref Dinçer, işletmemizin de bulunduğu bölgedir. Merkezi konumu sayesinde tüm Gemlik'e hızlı ulaşım sağlanır.",
    "kayhan-mahallesi": "Kayhan Mahallesi, Gemlik'in yoğun konut bölgelerinden biridir. Apartman ve müstakil evlerde sıkça kilit ve anahtar sorunları yaşanır.",
    "umurbey-mahallesi": "Umurbey Mahallesi, Gemlik'in gelişen mahallelerinden biridir. Yeni yapılaşma ile birlikte modern kilit sistemleri yaygınlaşmıştır.",
    "cumhuriyet-mahallesi": "Cumhuriyet Mahallesi, Gemlik merkezine yakın konumuyla sık çilingir talebi alan bölgelerden biridir.",
    "hisar-mahallesi": "Hisar Mahallesi, tarihi dokusuyla Gemlik'in önemli mahallelerinden biridir. Eski ve yeni yapıların karışımı farklı kilit tipleri gerektirir.",
    "balikpazari-mahallesi": "Balıkpazarı Mahallesi, Gemlik'in ticari hayatının yoğun olduğu bölgelerden biridir. İşyeri ve konut kilit ihtiyaçlarına hizmet veriyoruz.",
    "osmaniye-mahallesi": "Osmaniye Mahallesi sakinleri için 7/24 çilingir desteği sunuyoruz. Acil durumlarda hızlı müdahale önceliğimizdir.",
    "hamidiye-mahallesi": "Hamidiye Mahallesi, Gemlik'in yerleşik mahallelerinden biridir. Uzun yıllardır bu bölgede hizmet veriyoruz.",
    "yeni-mahalle": "Yeni Mahalle, Gemlik'in büyüyen konut alanlarından biridir. Yeni taşınanlar için kilit değişimi sık talep edilir.",
    kumla: "Kumla, Gemlik'in sahil bölgesidir. Yazlık ve sürekli konutlarda farklı kilit ihtiyaçları ortaya çıkar.",
    kumsaz: "Kumsaz bölgesi, Gemlik kıyı şeridinin önemli noktalarından biridir. Bölgeye özel hızlı ulaşım sağlıyoruz.",
    kursunlu: "Kursunlu, Gemlik'in sakin mahallelerinden biridir. Konut ve işyeri çilingir ihtiyaçlarında yanınızdayız.",
  };

  return [
    { heading: `${mahalle.name} Çilingir Hizmeti`, paragraphs: [
      `Gemlik ${mahalle.name} sakinleri için profesyonel çilingir hizmeti sunuyoruz. ${locDesc[mahalle.slug] || ""} Gemlik Çilingir Ayhan olarak ${mahalle.shortName} bölgesinde 7/24 kapı açma, kilit değişimi, oto çilingir ve kasa çilingir hizmetleri veriyoruz.`,
      `Anahtarınız evde kaldığında, kapı kilitlendiğinde veya acil müdahale gerektiğinde ${SITE.phoneDisplay} numarasını aramanız yeterli. Deneyimli ekibimiz hasarsız açma teknikleriyle en kısa sürede adresinizde olur.`,
      `Gemlik genelinde ${SITE.googleRating} Google puanı ve ${SITE.reviewCount} müşteri yorumuyla güvenilir hizmet sunuyoruz. Şeffaf fiyat ve hızlı müdahale garantisi veriyoruz.`,
    ]},
    { heading: `${mahalle.shortName} Bölgesinde Sunduğumuz Hizmetler`, paragraphs: [
      `${mahalle.name} ve çevresinde 7/24 çilingir, acil çilingir, oto çilingir ve kasa çilingir hizmetleri sunuyoruz. Her hizmet türü için ayrı uzman ekip görevlendirilir.`,
      `Konut kapıları, çelik kapılar, araç kilitleri ve kasa sistemlerinde profesyonel müdahale yapıyoruz. Amatör açma girişimlerinin neden olduğu hasarları önlüyoruz.`,
      `Yeni eve taşınanlar için kilit değişimi, güvenlik kilidi montajı ve anahtar kopyalama hizmetleri de sunuyoruz.`,
    ]},
    { heading: "Neden Bizi Tercih Etmelisiniz?", paragraphs: [
      `Gemlik'te yılların deneyimiyle hizmet veriyoruz. ${mahalle.shortName} bölgesine ortalama 15-30 dakikada ulaşıyoruz.`,
      `7/24 kesintisiz hizmet — gece, hafta sonu ve bayram günleri dahil her an arayabilirsiniz.`,
      `Hasarsız açma, şeffaf fiyat ve profesyonel ekipman kullanımı temel prensiplerimizdir.`,
    ]},
    { heading: "Yakın Mahalleler", paragraphs: [
      `Gemlik'in diğer mahallelerine de aynı kalitede hizmet veriyoruz. Kayhan, Umurbey, Cumhuriyet, Hisar, Balıkpazarı, Osmaniye, Hamidiye, Yeni Mahalle, Kumla, Kumsaz ve Kursunlu dahil tüm bölgelerde 7/24 çilingir hizmeti sunuyoruz.`,
      `Bulunduğunuz mahalledeki hizmet sayfalarına sitemizden ulaşabilirsiniz.`,
    ]},
    { heading: "İletişim", paragraphs: [
      `${mahalle.name} çilingir hizmeti için ${SITE.phoneDisplay} numarasını arayın veya WhatsApp üzerinden yazın. Adresinizi paylaştığınızda ekip hemen yola çıkar.`,
      `Gemlik Çilingir Ayhan — ${mahalle.shortName} ve tüm Gemlik'te güvenilir çilingir hizmeti.`,
    ]},
  ];
}

function buildComboSections(mahalle, hizmet) {
  const serviceDetail = {
    "724": `${mahalle.name} sakinleri için gece gündüz kesintisiz çilingir desteği. Haftanın 7 günü, günün 24 saati ${mahalle.shortName} bölgesine hizmet veriyoruz.`,
    acil: `${mahalle.name} bölgesinde acil çilingir ihtiyacınızda dakikalar içinde müdahale. Kapıda kaldığınızda veya kilit arızasında hemen arayın.`,
    oto: `${mahalle.name} ve çevresinde oto çilingir hizmeti. Araç kapısı açma, anahtar kopyalama ve immobilizer programlama.`,
    kasa: `${mahalle.name} bölgesinde kasa çilingir hizmeti. Kasa açma, şifre sıfırlama ve elektronik kasa tamiri.`,
  };

  return [
    { heading: `Gemlik ${mahalle.name} ${hizmet.label}`, paragraphs: [
      `Gemlik ${mahalle.shortName} ${hizmet.keyword} arayanlar için profesyonel ve hızlı çözüm sunuyoruz. ${serviceDetail[hizmet.slug]}`,
      `${SITE.name} olarak ${mahalle.name} bölgesinde uzun yıllardır hizmet veriyoruz. Müşteri memnuniyeti odaklı çalışma prensibimizle Gemlik'in en güvenilir çilingirlerinden biriyiz.`,
      `Acil durumlarda öncelikli müdahale sağlıyoruz. ${SITE.phoneDisplay} numarasını arayarak veya WhatsApp üzerinden yazarak hizmet talep edebilirsiniz.`,
    ]},
    { heading: "Hizmet Detayları", paragraphs: [
      hizmet.description,
      `${mahalle.name} bölgesindeki konut, işyeri ve araç sahiplerine yönelik kapsamlı ${hizmet.keyword} hizmeti sunuyoruz. Profesyonel ekipmanlarla hasarsız açma garantisi veriyoruz.`,
      `Fiyat bilgisi için aramadan önce kilit tipi veya sorun hakkında bilgi vermeniz net teklif almanızı kolaylaştırır.`,
    ]},
    { heading: "Neden Gemlik Çilingir Ayhan?", paragraphs: [
      `Gemlik genelinde ${SITE.googleRating} Google puanı ve hızlı müdahale süresiyle öne çıkıyoruz.`,
      `${mahalle.shortName} bölgesine ortalama 15-30 dakikada ulaşıyoruz. 7/24 kesintisiz hizmet sunuyoruz.`,
      `Şeffaf fiyat politikası — gizli ücret yok, işlem öncesi bilgilendirme var.`,
    ]},
    { heading: `${mahalle.shortName} ve Çevre Mahalleler`, paragraphs: [
      `Gemlik'in tüm mahallelerinde aynı kalitede ${hizmet.keyword} hizmeti veriyoruz. Eşref Dinçer, Kayhan, Umurbey, Cumhuriyet, Hisar, Balıkpazarı, Osmaniye, Hamidiye, Yeni Mahalle, Kumla, Kumsaz ve Kursunlu dahil.`,
      `Diğer mahallelerdeki ${hizmet.label} sayfalarına sitemizden ulaşabilirsiniz.`,
    ]},
    { heading: "Hemen İletişime Geçin", paragraphs: [
      `Gemlik ${mahalle.shortName} ${hizmet.keyword} için ${SITE.phoneDisplay} numarasını arayın. Bir telefon kadar uzağınızdayız.`,
      `WhatsApp üzerinden de 7/24 ulaşabilirsiniz. Adresinizi paylaştığınızda ekip hemen yola çıkar.`,
    ]},
  ];
}
