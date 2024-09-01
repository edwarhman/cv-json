import { defineConfig } from 'astro/config'
import { i18n } from './src/i18n/config'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  i18n
})
