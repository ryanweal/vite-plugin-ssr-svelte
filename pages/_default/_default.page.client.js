export { render }

async function render(pageContext) {
  new pageContext.Page({
    target: document.getElementById('app'),
  })
}

