<script>
  import Layout from '../__layout.svelte'
</script>

<Layout>
  <h1>About</h1>
  <p>A colored page.</p>
</Layout>

<style>

:global(.content h1), :global(.content p) {
  color: green;
}
</style>
