<script>
  import MetaTags from '../_components/MetaTags.svelte';
  import Layout from '../__layout.svelte';
  export let pageProps;
</script>

<MetaTags title={pageProps.title} description={pageProps.body} />

<main>
  <Layout>
    <h1>{pageProps.title}</h1>
    <p>{pageProps.body}</p>
  </Layout>
</main>

<style>
  /* Note: for * :global() to work, the component must be within
    ===== a parent DOM element (in this case, the <main> block). */
  * :global(h1), * :global(p) {
    color: green;
  }
</style>
