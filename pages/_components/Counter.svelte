<script>
  let count = 0
  const updateCounter = () => count++
</script>

<button on:click={updateCounter}>{count}</button>
