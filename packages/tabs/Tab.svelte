<script>
  import { getContext } from "svelte";

  export let renderless = false;

  const tab = { renderless };
  const { registerTab, activeTab, select, id, tabs } = getContext("tabs");

  let selected = false;

  registerTab(tab);

  $: selected = $activeTab === tab;

  $: a11y = {
    button: {
      role: "tab",
      "aria-controls": `${id}-panel-${tabs.indexOf(tab)}`,
      "aria-selected": selected,
      id: `${id}-tabs-${tabs.indexOf(tab)}`,
      tabindex: selected ? 0 : -1,
    },
  };
</script>

{#if !renderless}
  <button
    on:click={() => select(tab)}
    class="esky-tab"
    class:esky-active-tab={selected}
    {...a11y.button}>
    <slot />
  </button>
{:else}
  <slot select={() => select(tab)} active={selected} {a11y} />
{/if}
