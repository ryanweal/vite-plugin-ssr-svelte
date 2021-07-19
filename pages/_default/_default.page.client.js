import { getPage } from 'vite-plugin-ssr/client'
import App from './PageLayout.svelte'

const pageContext = await getPage()

console.log('Hello')
console.log('pageContext', pageContext.Page)

const app = new pageContext.Page({
  target: document.getElementById('app'),
  hydrate: true,
  // props: pageContext.props
})

// hydrate()

// async function hydrate() {
//   const pageContext = await getPage()
//   const app = createApp(pageContext)
//   app.mount('#app')
// }
