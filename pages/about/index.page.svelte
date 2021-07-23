<script>
  import Layout from '../__layout.svelte'
</script>

<main>
  <Layout>
    <h1>About</h1>
    <p>A colored page.</p>
  </Layout>
</main>

<style>
  /* Note: for * :global() to work, the component must be within
    ===== a parent DOM element (in this case, the <main> block). */
  * :global(h1), * :global(p) {
    color: green;
  }
</style>
