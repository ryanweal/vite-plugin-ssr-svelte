import ssr from 'vite-plugin-ssr/plugin'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default {
  publicDir: "assets",
  plugins: [svelte({
    experimental: {
      dynamicCompileOptions({filename, compileOptions}) {
        if (!compileOptions.hydratable) {
          return {
            hydratable: true
          };
        }
      }
    }
  }), ssr({
    prerender: true
  })]
}
