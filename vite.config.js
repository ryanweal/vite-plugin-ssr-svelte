import ssr from 'vite-plugin-ssr/plugin'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default {
  //base: '/some/base/url',
  plugins: [svelte(), ssr({
    prerender: {
      //partial: true,
      //noExtraDir: true,
      //parallel: 1 // Can be `number` or `boolean`
    }
  })]
}
