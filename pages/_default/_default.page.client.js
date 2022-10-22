export { render }

async function render(pageContext) {
  const app_el = document.getElementById('app');
  new pageContext.Page({
    target: app_el,
    hydrate: true,
    props: {
      pageProps: pageContext.pageProps
    }
  })
}
