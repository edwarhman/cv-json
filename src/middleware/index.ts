import { sequence } from 'astro:middleware'
import { redirectIfInvalidLang } from './redirectToDefaultLocale'

export const onRequest = sequence(redirectIfInvalidLang)
