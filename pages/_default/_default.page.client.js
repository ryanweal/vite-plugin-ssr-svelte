import { getPage } from 'vite-plugin-ssr/client'

const pageContext = await getPage()

new pageContext.Page({
  target: document.getElementById('app'),
  hydrate: true
})
