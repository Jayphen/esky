<script>
  import { getContext } from "svelte";

  export let renderless = false;

  const tab = { renderless };
  const { registerTab, activeTab, select } = getContext("tabs");

  registerTab(tab);

  let a11y = {
    button: {
      "data-test": "test",
    },
  };
</script>

{#if !renderless}
  <button
    on:click={() => select(tab)}
    class="esky-tab"
    class:esky-active-tab={$activeTab === tab}>
    <slot />
  </button>
{:else}
  <slot select={() => select(tab)} active={$activeTab === tab} {a11y} />
{/if}
