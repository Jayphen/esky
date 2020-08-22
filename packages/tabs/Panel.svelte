<script>
  import { getContext } from "svelte";

  const panel = {};
  const { registerPanel, activePanel } = getContext("tabs");

  registerPanel(panel);
</script>

{#if $activePanel === panel}
  <slot />
{/if}
