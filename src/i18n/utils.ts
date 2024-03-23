import { i18n } from "./config";
import {uiContent} from './interface'

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

export function useTranslation<L extends keyof typeof uiContent>(lang: L) {
  return uiContent[lang]
}