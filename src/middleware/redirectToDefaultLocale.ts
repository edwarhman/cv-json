import { isValidLocale } from '@/core/i18n/utils'
import { defineMiddleware } from 'astro:middleware'

export const redirectIfInvalidLang = defineMiddleware(async (context, next) => {
  const lang = context.params.lang

  if (lang == null || isValidLocale(lang)) {
    return await next()
  }

  const newPath = context.url.pathname.replace(`/${lang}`, '')
  return context.redirect(newPath, 301)
})
