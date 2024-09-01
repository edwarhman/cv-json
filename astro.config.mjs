import { defineConfig } from 'astro/config'
import { i18n } from './src/core/i18n/config'

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  i18n,
  integrations: [react()]
})