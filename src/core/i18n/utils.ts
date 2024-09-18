import { i18n } from './config'
import { uiContent } from './interface'

export type Locale = typeof i18n.locales[number]

export function isValidLocale (locale: string) {
  return i18n.locales.includes(locale as Locale)
}

const defaultLang = i18n.defaultLocale
const languages = {
  en: 'English',
  es: 'Español'
}
export function getLangFromUrl (url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang && lang in languages) return lang as Locale
  return defaultLang
}

export type UI_CONTENT = keyof typeof uiContent

export function useTranslation<L extends UI_CONTENT> (lang: L) {
  return uiContent[lang]
}
