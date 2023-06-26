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

<MetaTags title="Vite-Plugin-SSR-Svelte Project"
  description="Vite-based alternative to SvelteKit" />

<Layout>
  <h1>Welcome to Vite-Plugin-SSR-Svelte!</h1>

  <p>This repo demonstrates how to create a static site using Svelte using Vite
  & Vite-Plugin-SSR to produce a prerendered site of static pages. The rendering time is blazingly fast and works well on low-powered hardware.</p>
  <p>Conisder it like an alternative to SvelteKit, but with many of the more
  complex features disabled by default so you can enable the fancy stuff when you are ready for it.</p>

 <h2>To demonstrate how this works, this page is:</h2>

  <ul>
    <li>Rendered to HTML.</li>
    <li>{state_text}. Click counter: <Counter /></li>
  </ul>

  <h2>Learn More</h2>

  <ul>
    <li>
      <a href="https://github.com/ryanweal/vite-plugin-ssr-svelte">The GitHub repo for this project</a>
    </li>
    <li>
      <a href="https://ryanweal.github.io/vite-plugin-ssr-svelte/">This demo page hosted on Github Pages</a>
    </li>
    <li>
      <a href="https://vite-plugin-ssr.com/">Vite-Plugin-SSR docs</a>
    </li>
  </ul>

</Layout>
