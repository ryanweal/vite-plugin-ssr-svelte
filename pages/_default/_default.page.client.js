export { render }

async function render(pageContext) {
  const app_el = document.getElementById('app');
  app_el.innerHTML = ''; // gross or beautiful?
  new pageContext.Page({
    target: app_el,
  })
}
