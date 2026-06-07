/**
 * Mahalle adını URL slug'ına çevirir (SEO ve tutarlı URL için).
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
