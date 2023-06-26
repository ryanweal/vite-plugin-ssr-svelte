
export { onBeforeRender }

async function onBeforeRender(pageContext) {

  // await api data here
  const page = {
    title: "About",
    body: `<p>Sample API prefetch page with a fixed path (ie, not a catch-all route) and some scoped CSS for the route (using the script tag, in the Svelte file).</p>
      <p>Currently this implements an onBeforeRender in the about/index.page.server.js file. That is the hook that injects the data into the page about/index.</p>
      <p>If you want to do a full API implementation you will need: </p>
      <ul>
        <li>(1) add the prerender function to the index.page.server.js to tell it what paths to render,</li>
        <li>(2) create a custom index.page.route.js if your routes cannot be matched by a single variable in the folder name (you can use @slug as folder name, if your slugs never has a '/' in it), then </li>
        <li>(3) the onbeforerender to grab the data, and </li>
        <li>(4) finally an index.page.svelte to render the goods.</li>
      </ul>

      <p>Knowing all this, you will see that this "about" page demo will only allow you to pull data in for this ONE path the way it is currently coded, but the above instructions would allow you to make an entire site by feeding a list of paths to be rendered to the prerender function, and then making the path name map to a specific page in the pages folder (either by renaming "about" to "@slug" or to create a index.page.route.js with a function to match paths with the list that prerender funciton has).</p>

      <p>See the <a href="https://vite-plugin-ssr.com/">vite-plugin-ssr docs for more details</a>.</p>

      <p>I like to do a single API call in a file (not demonstrated here) called single-hit.js that does ONLY ONE API call, caches it, and exports the results, so that the above functions can be performed at lightning speeds (if you have a limited number of pages and this won't blow out your memory, I recommend trying it!).</p>
    `
  };

  // pageProps is listed in server's passToClient list, so we put all of our
  // props into that, and just use that one prop.
  return {
    pageContext: {
      pageProps: {
        ...page
      }
    }
  }
}
