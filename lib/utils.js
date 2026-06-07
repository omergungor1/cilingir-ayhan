/**
 * Mahalle adını URL slug'ına çevirir (SEO ve tutarlı URL için).
 * Örn: "Hamidiye Mahallesi" -> "hamidiye-mahallesi", "Yalıntaş Mahallesi" -> "yalintas-mahallesi"
 */
export function slugify(text) {
  const turkishMap = {
    ğ: "g",
    Ğ: "g",
    ü: "u",
    Ü: "u",
    ş: "s",
    Ş: "s",
    ö: "o",
    Ö: "o",
    ç: "c",
    Ç: "c",
    ı: "i",
    İ: "i",
    I: "i",
  };
  return text
    .split("")
    .map((c) => turkishMap[c] || c)
    .join("")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

/**
 * İlçe URL slug'ları (ASCII only - output: export ve CDN uyumu için).
 * Mustafakemalpaşa için ş harfi URL'de "s" kullanılır.
 */
export const ILCE_SLUG_MUSTAFAKEMALPASA = "mustafakemalpa" + "sa";
export const ILCE_SLUG_KARACABEY = "karacabey";

/** URL'den gelen ilce slug (ASCII) -> dahili ilçe anahtarı (ILCE_LISTESI key) */
export const ILCE_SLUG_TO_KEY = {
  [ILCE_SLUG_MUSTAFAKEMALPASA]: "mustafakemalpa\u015fa", // \u015f = ş
  [ILCE_SLUG_KARACABEY]: "karacabey",
};
