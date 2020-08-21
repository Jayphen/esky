<script>
  import ScrollDirection from "../../../packages/scroll-direction/index.svelte";

  function gohome() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
</script>

<style>
  :global(body, html) {
    height: 300%;
  }
  div {
    position: fixed;
  }
  em {
    background: pink;
    padding: 0.25em;
  }

  button {
    position: fixed;
    top: 0;
    right: 0;
    padding: 5em;
    background: black;
    color: white;
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s linear;
  }
  button.down {
    transform: translate(50%, -90%);
  }
</style>

<ScrollDirection let:direction let:position>
  {#if direction === 'initial' || position === 0}
    <div>Try scrolling. It'll be fun</div>
  {:else}
    <div>
      Look at that! You're scrolling
      <em>{direction}</em>
      <pre>{position}</pre>
      <button on:click={gohome} class:down={direction === 'down'}>
        back to top
      </button>
    </div>
  {/if}
</ScrollDirection>
