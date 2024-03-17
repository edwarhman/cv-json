import { i18n } from "./config";

const defaultLang = i18n.defaultLocale;
const languages = {
    en: "English",
    es: "Español"
}
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}
