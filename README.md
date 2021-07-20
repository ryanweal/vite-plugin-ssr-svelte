# WIP: Svelte SSR example using vite-plugin-ssr

Work-in-progress: an attempt to create a Svelte version of the [vite-plugin-ssr](https://vite-plugin-ssr.com/) vue template.

## Vite plugins used

  - [vite-plugin-ssr](https://vite-plugin-ssr.com/)
  - [vite-plugin-svelte](https://github.com/sveltejs/vite-plugin-svelte/tree/main/packages/vite-plugin-svelte)

## Outstanding issues

  - <strike>Initial flash of unstyled content during dev.</strike> ([thank you, Romuald](https://github.com/aral/vite-plugin-ssr-svelte/issues/1), I was just not adding the CSS to the page while rendering on the server.)

  - Cheat: “layout” is being manually imported into all pages.

  - Cheat: logo.svg link hardcoded in head (in _default.page.server.js_)

  - <strike>No idea how to _not_ replace server-side rendered prop values (e.g., replace the initial counter value in Counter.svelte with `Math.random()` and note that the value during server render is replaced during Svelte hydration).</strike> Hydration is at page-level, not component-level (of course, *duh* – so this is a non-issue.)

  - Cheat: “Colored page” is not coloured via scoped ruled but by the global cascade because components are wrapped in the layout component. The new `* :global()` syntax in Svelte _was_ working for this in 3.38.2 at least.

  - <strike>Enters reload cycles when running with @small-tech/https (not seen on http://localhost:3000 and not present with the vue template)</strike> Adding `https: true` while creating the Vite server seems to have fixed this. Will test further to make sure.

## Install and run

1. Clone this repository
2. Run `npm run dev`
3. Hit `https://localhost`
