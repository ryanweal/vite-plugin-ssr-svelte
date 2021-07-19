<script>
  import Counter from './_components/Counter.svelte'
  import Layout from './__layout.svelte'
</script>

<Layout>
  <h1>Welcome</h1>
  This page is:
  <ul>
    <li>Rendered to HTML.</li>
    <li>Interactive. <Counter /></li>
  </ul>
</Layout>
