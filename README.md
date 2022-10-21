# Vite + Svelte + vite-plugin-ssr static prerender demo project!

A Svelte version of the [vite-plugin-ssr](https://vite-plugin-ssr.com/) module.

This module demonstrates doing fully prerendered HTML with the correct hydration settings so that your app will load smoothly in any context.

Why not use SvelteKit? Using `vite-plugin-ssr` you can override pretty much everything *and* you could also add other frameworks (such as Vue, React, others) for specific routes by providing more specific `page.client.js` and `page.server.js` files.

## Vite plugins used

  - [vite-plugin-ssr](https://vite-plugin-ssr.com/)
  - [vite-plugin-svelte](https://github.com/sveltejs/vite-plugin-svelte/tree/main/packages/vite-plugin-svelte)
  - [express.js](https://expressjs.com/)

## Install and run

1. Clone this repository
2. Install dependencies: `npm i`
3. Run it: `npm run dev` and enjoy hot reloading as you work.
4. Visit `http://localhost:3000` in your browser.
5. Build it: `npm run build`
6. Serve it: `npx serve dist/client`
