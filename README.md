# Vite + Svelte + vite-plugin-ssr static prerender starter project!

A Svelte version of the [vite-plugin-ssr](https://vite-plugin-ssr.com/) module.

This module demonstrates doing fully prerendered HTML with the correct hydration
settings so that your app will load smoothly in any context.

You can try it out here: https://ryanweal.github.io/vite-plugin-ssr-svelte/

Why not use SvelteKit? Using `vite-plugin-ssr` you can override pretty much
everything *and* you could also add other frameworks (such as Vue, React,
others) for specific routes by providing more specific `page.client.js` and
`page.server.js` files.

## What works out of the box

This repo could be used as a starter for your next project. It is setup to do
the typical framework tasks:

- Create pages and components using Svelte, with hot reloading in dev
- Prerender all content during build time
- Hydrate the prerendered content with any client-side JS
- MetaTags can easily be set using the example component
- Assets folder copied straight to the build folder so you can reference images like it was 1999 and not worry about importing them.

We also include some examples of making API calls on the server-side only to
fetch your data.

## Vite plugins used

  - [vite-plugin-ssr](https://vite-plugin-ssr.com/)
  - [vite-plugin-svelte](https://github.com/sveltejs/vite-plugin-svelte/tree/main/packages/vite-plugin-svelte)
  - [express.js](https://expressjs.com/) (used for the prerendering process)

## Install and run

1. Clone this repository
2. Install dependencies: `npm i`
3. Run it: `npm run dev` and enjoy hot reloading as you work.
4. Visit `http://localhost:3000` in your browser.
5. Build it: `npm run build`
6. Serve it: `npx serve dist/client`

## Updates

To update this package you can follow the normal NPM update procedures.

We have used the built-in `npm shrinkwrap`command to provide an
`npm-shrinkwrap.json` rather than the normal `package-lock.json` which keeps
this repo fixed at a "known good" state, if you use `npm` as your installer.

Be sure to fully test updates if you make changes to your `npm-shrinkwrap.json`
file.
