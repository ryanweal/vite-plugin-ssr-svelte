# WIP: Svelte SSR example using vite-plugin-ssr

An attempt to create a Svelte version of the [vite-plugin-ssr](https://vite-plugin-ssr.com/) vue template.

## Vite plugins used

  - [vite-plugin-ssr](https://vite-plugin-ssr.com/)
  - [vite-plugin-svelte](https://github.com/sveltejs/vite-plugin-svelte/tree/main/packages/vite-plugin-svelte)

## Outstanding issues

  - Cheat: “layout” is being manually imported into all pages.

  - Cheat: logo.svg link hardcoded in head (in _default.page.server.js_)

  - Cheat: “Colored page” is not coloured via scoped ruled but by the global cascade because components are wrapped in the layout component. The new `* :global()` syntax in Svelte _was_ working for this in 3.38.2 at least.

  - <strike>Enters reload cycles when running with @small-tech/https (not seen on http://localhost:3000 and not present with the vue template)</strike> Adding `https: true` while creating the Vite server seems to have fixed this. Will test further to make sure.

## Install and run

1. Clone this repository
2. Run `npm run dev`
3. Hit `https://localhost`
