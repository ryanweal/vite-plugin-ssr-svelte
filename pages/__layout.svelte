<script>
  const base = import.meta.env.BASE_URL;
</script>

<div class="layout">
  <div class="navigation">
    <a href="{base}" class="logo">
      <img src={`${base}logo.svg`} height="64" width="64" alt="logo" />
    </a>
    <a class="navitem" href="{base}">Home</a>
    <a class="navitem" href={`${base}about`}>About</a>
  </div>
  <div class="content"><slot /></div>
</div>

<style>
:global(body) {
  margin: 0;
  font-family: sans-serif;
}

:global(*) {
  box-sizing: border-box;
}

:global(a) {
  text-decoration: none;
}

.layout {
  display: flex;
  max-width: 900px;
  margin: auto;
}
.content {
  padding: 20px;
  border-left: 2px solid #eee;
  padding-bottom: 50px;
  min-height: 100vh;
}
.navigation {
  padding: 20px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.8em;
}
.logo {
  margin-top: 20px;
  margin-bottom: 10px;
}
.navitem {
  padding: 3px;
}
</style>
