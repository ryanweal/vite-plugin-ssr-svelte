<script>
  import {onMount} from "svelte";
  import MetaTags from "./_components/MetaTags.svelte";
  import Layout from './__layout.svelte';
  import Counter from './_components/Counter.svelte';

  let state_text = "Prerendered";

  onMount(() => {
    state_text = "Prerendered and interactive";
  });
</script>

<MetaTags title="Vite Plugin SSR Svelte Project"
  description="Demonstration of using the Vite bundler for Svelte projects." />

<Layout>
  <h1>Welcome</h1>
  This page is:
  <ul>
    <li>Rendered to HTML.</li>
    <li>{state_text}. <Counter /></li>
  </ul>
</Layout>
