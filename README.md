# WIP: Svelte SSR example using vite-plugin-ssr

An attempt to create a Svelte version of the [vite-plugin-ssr](https://vite-plugin-ssr.com/) vue template.

## Vite plugins used

  - [vite-plugin-ssr](https://vite-plugin-ssr.com/)
  - [vite-plugin-svelte](https://github.com/sveltejs/vite-plugin-svelte/tree/main/packages/vite-plugin-svelte)

## Outstanding issues

  - Cheat: “layout” is being manually imported into all pages.

    In the Vue example, it’s trivial to implement a layout template but Svelte pages must be compiled. You could add that feature to this example by manually creating and rendering a Svelte page wrapped in the layout component but that would add a lot of complexity to this small example while still not being indicative of real-world use (where you could have a hierarchy of layout templates and would likely have to keep a graph of your dependencies).

    Relatedly, instead of local scoped styles, we’re scoping the styles to the content of the slot in the “Colored page” using the new `* :global()` syntax in Svelte.

  - Cheat: logo.svg link hardcoded in head (in _default.page.server.js_)

## Install and run

1. Clone this repository
2. Install dependencies: `npm i`
2. Run it: `npm run dev`
3. Hit `https://localhost` in your browser.


