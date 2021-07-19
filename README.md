# WIP: Svelte SSR example using vite-plugin-ssr

Work-in-progress: an attempt to create a Svelte version of the [vite-plugin-ssr](https://vite-plugin-ssr.com/) vue template.

## Vite plugins used

  - [vite-plugin-ssr](https://vite-plugin-ssr.com/)
  - [vite-plugin-svelte](https://github.com/sveltejs/vite-plugin-svelte/tree/main/packages/vite-plugin-svelte)

## Outstanding issues

  - Initial flash of unstyled content during dev.

  - Cheat: “layout” is being manually imported into all pages.

  - Cheat: logo.svg link hardcoded in head (in _default.page.server.js_)

  - No idea how to _not_ replace server-side rendered prop values (e.g., replace the initial counter value in Counter.svelte with `Math.random()` and note that the value during server render is replaced during Svelte hydration).

  - Cheat: “Colored page” is not coloured via scoped ruled but by the global cascade because components are wrapped in the layout component. The new `* :global()` syntax in Svelte _was_ working for this in 3.38.2 at least.

  - Enters reload cycles when running with @small-tech/https (not seen on http://localhost:3000 and not present with the vue template)

## Install and run

1. Clone this repository
2. Run `npm run dev`
3. Hit `https://localhost`
