import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server"
const base = import.meta.env.BASE_URL

export { render }
export { passToClient }

// See https://vite-plugin-ssr.com/data-fetching
const passToClient = ['pageProps', 'routeParams']

async function render(pageContext) {
  const app = pageContext.Page.render(pageContext)
  const appHtml = app.html
  const appHead = app.head

  // We are using Svelte's app.head variable rather than the Vite Plugin SSR
  // technique described here: https://vite-plugin-ssr.com/html-head This seems
  // easier for using data fetched from APIs and also allows us to input the
  // data using our custom MetaTags Svelte component.

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${base}logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${dangerouslySkipEscape(appHead)}
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>

      <noscript>
        <style>
          /* allow components to use a .no-js class corresponding with the global.csss file */
          .no-js {
            visibility: visible;
          }
          /* display a no-javascript banner */
          html::before {
            content: 'Please enable JavaScript to use this site!';
            width:100%;
            background: red;
            color: white;
            height: 60px;
            font-size: 1em;
            display: flex;
            align-items: center;
            justify-content: center;
         }
        </style>
      </noscript>

    </html>`
}
