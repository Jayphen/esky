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
  .active {
    font-weight: bold;
    position: relative;
  }
  .active:before {
    position: absolute;
    font-size: 0.75em;
    content: "you're here mate ▼";
    top: 0;
    font-weight: normal;
    opacity: 0.5;
  }
</style>

<nav>
  <a href="/" class:active={!segment}>Home</a>
  <a href="/scroll-direction" class:active={segment === 'scroll-direction'}>
    scroll direction
  </a>
</nav>
