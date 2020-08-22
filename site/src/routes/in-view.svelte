<script>
  import InView from "@esky/in-view";

  let element;
</script>

<style>
  :global(body, html) {
    height: 120%;
  }

  div {
    padding: 2em;
    background: antiquewhite;
    transition: all 0.5s linear;
    margin-top: 100vh;
  }

  .inview {
    transform: skewY(5deg) rotateX(10deg);
  }
</style>

<span>scroll down!</span>

<InView let:inView threshold={1} offset="100px 0px -100px 0px" {element}>
  <div bind:this={element} class:inview={inView}>
    {#if inView}in view!{:else}totally not in view{/if}
  </div>
</InView>
