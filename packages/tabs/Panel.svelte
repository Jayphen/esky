<script>
  import { getContext } from "svelte";
  import Tabs from "../../site/src/routes/tabs.svelte";
  import Tab from "./Tab.svelte";

  export let renderless = false;
  let selected = false;

  const panel = {};
  const { registerPanel, activePanel, panels, id } = getContext("tabs");

  registerPanel(panel);

  $: selected = $activePanel === panel;

  $: a11y = {
    panel: {
      id: `${id}-panel-${panels.indexOf(panel)}`,
      tabindex: 0,
      "aria-labelledby": `${id}-tabs-${panels.indexOf(panel)}`,
    },
  };
</script>

{#if $activePanel === panel}
  {#if !renderless}
    <div {...a11y.panel}>
      <slot />
    </div>
  {:else}
    <slot {a11y} active={selected} />
  {/if}
{/if}
