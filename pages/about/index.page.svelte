<script>
  import MetaTags from '../_components/MetaTags.svelte';
  import Layout from '../__layout.svelte';
  export let pageProps;
  import "./api-style.css"; // style for html from API that the compiler doesn't see
</script>

<MetaTags title={pageProps.title} description={pageProps.body} />

<Layout>
  <h1>{pageProps.title}</h1>
  <div>{@html pageProps.body}</div>
</Layout>

<style scoped>
/* any tags you style here that are only referenced in the API data will be
 * stripped out by the compiler because it doesn't know they get used. Put any of
 * that stuff in either the global.css file or create a new css file in this
 * folder and and import it in the script tag above to get around this. */

  h1 {
    color: var(--cyan30);
  }
 </style>
