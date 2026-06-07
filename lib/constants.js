export const SITE = {
  name: "Paşa Çilingir",
  domain: "https://pasacilingir.com",
  phone: "+905413433490",
  phoneDisplay: "0541 343 34 90",
  whatsapp: "905413433490",
  address: "Barış mahallesi fatih caddesi No:16 Mustafakemalpaşa/Bursa",
  mapLink: "https://maps.app.goo.gl/oVnHZFD4fmFH8zYv8",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3054.6751467505233!2d28.382241276444574!3d40.0380317786004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b60f00e309c615%3A0x3f694307397c8a10!2zcGHFn2Egw6dpbGluZ2ly!5e0!3m2!1str!2str!4v1771617643393!5m2!1str!2str",
  googleRating: 5.0,
  reviewCount: 48,
};

/** Bursa Mustafakemalpaşa ilçesi mahalleleri */
export const MUSTAFAKEMALPASA_MAHALLELER = [
  "Hamidiye Mahallesi",
  "Yalıntaş Mahallesi",
  "Barış Mahallesi",
  "Tatkavaklı Mahallesi",
  "Atatürk Mahallesi",
  "Hamzabey Mahallesi",
  "Yunus Emre Mahallesi",
  "Atariye Mahallesi",
  "Selimiye Mahallesi",
  "Lalaşahin Mahallesi",
];

/** Bursa Karacabey ilçesi mahalleleri */
export const KARACABEY_MAHALLELER = [
  "Gazi Mahallesi",
  "Emirsultan Mahallesi",
  "Sırabademler Mahallesi",
  "Esentepe Mahallesi",
  "Saadet Mahallesi",
  "Tavşanlı Mahallesi",
  "Hamidiye Mahallesi",
  "Yeni Mahallesi",
  "Hüdavendigar Mahallesi",
  "Karacaahmet Mahallesi",
];

/** Tüm hizmet bölgelerindeki mahalleler (liste gösterimi için) */
export const MAHALLELER = [
  ...MUSTAFAKEMALPASA_MAHALLELER,
  ...KARACABEY_MAHALLELER,
];
