import ssr from 'vite-plugin-ssr/plugin'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default {
  publicDir: "assets",
  plugins: [svelte(), ssr({
    prerender: true
  })]
}
