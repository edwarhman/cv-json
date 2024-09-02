import { defineConfig } from 'astro/config'
import { i18n } from './src/core/i18n/config'

import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  i18n,
  integrations: [react()],
  adapter: vercel()
})