<script>
  import { getContext } from "svelte";

  export let initial;

  const tab = { initial };
  const { registerTab, activeTab, select } = getContext("tabs");

  registerTab(tab);
</script>

<button
  on:click={() => select(tab)}
  class="esky-tab"
  class:esky-active-tab={$activeTab === tab}>
  <slot />
</button>
