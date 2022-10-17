import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr"

export { render }
export { passToClient }

// See https://vite-plugin-ssr.com/data-fetching
const passToClient = ['pageProps', 'routeParams']

async function render(pageContext) {
  const app = pageContext.Page.render(pageContext)
  const appHtml = app.html
  const appCss = app.css.code
  const appHead = app.head

  // See https://vite-plugin-ssr.com/html-head
  const { documentProps } = pageContext
  const title = (documentProps && documentProps.title) || 'Vite SSR app (Svelte version)'
  const desc = (documentProps && documentProps.description) || 'App using Vite + vite-plugin-ssr (Svelte version)'

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="/logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
        <style>${appCss}</style>
      </head>
      <body>
        <div id="app">

          <!-- injecting appHtml here will prevent _default.page.client.js from
          running. so if you want prerender, it will not work if you want the
          Svelte app to run -->

        </div>
      </body>
    </html>`
}
