<script>
  import InView from "@esky/in-view";

  function entered() {
    console.log("entered!");
  }

  function exited() {
    console.log("exited!");
  }

  let element;
</script>

<style>
  :global(body, html) {
    height: 150%;
  }

  div {
    padding: 2em;
    background: antiquewhite;
    border: 1px solid transparent;
    transition: all 0.5s linear;
    margin-top: 100vh;
  }

  .inview {
    transform: skewY(5deg) rotateX(10deg);
    border-color: pink;
  }
</style>

<span>scroll down!</span>

<pre>
  <ul>
    <li>- threshold: number (0-1, see intersection observer spec)</li>
    <li>- offset: string (margin-like, see intersection observer spec)</li>
    <li>- once: boolean (only trigger once)</li>
    <li>- on:entered: () => void (triggers when entering)</li>
    <li>- on:exited: () => void (triggers when leaving)</li>
  </ul>
</pre>

<InView
  let:inView
  threshold={0.5}
  offset="0px"
  {element}
  on:entered={entered}
  on:exited={exited}>
  <div bind:this={element} class:inview={inView}>
    {#if inView}in view!{:else}totally not in view{/if}
  </div>
</InView>
