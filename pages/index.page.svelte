<script>
  import {onMount} from "svelte";
  import Counter from './_components/Counter.svelte';
  import Layout from './__layout.svelte';

  let state_text = "Prerendered";

  onMount(() => {
    state_text = "Prerendered and interactive";
  });
</script>

<Layout>
  <h1>Welcome</h1>
  This page is:
  <ul>
    <li>Rendered to HTML.</li>
    <li>{state_text}. <Counter /></li>
  </ul>
</Layout>
