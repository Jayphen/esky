<script>
  export let segment;
</script>

<style>
  nav {
    display: grid;
    grid-gap: 1em;
    grid-auto-flow: column;
    max-width: 50vw;
    text-align: center;
    margin: 2em auto;
  }
  a {
    display: block;
    padding: 2em;
  }
  a:hover {
    background: antiquewhite;
  }
</style>

<nav>
  <a href="/">Home</a>
  <a href="/scroll-direction">scroll direction</a>
</nav>
