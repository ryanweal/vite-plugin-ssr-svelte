import ssr from 'vite-plugin-ssr/plugin'
import { svelte } from '@sveltejs/vite-plugin-svelte'

import * as dotenv from 'dotenv'
dotenv.config()

export default {
  base: `${process.env.BASE_URL || "/"}`,
  emptyOutDir: true,
  publicDir: "assets",
  plugins: [svelte({
    compilerOptions: {
      hydratable: true
    }
  }), ssr({
    prerender: true
  })]
}
