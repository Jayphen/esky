<script>
  import { setContext, onDestroy, onMount } from "svelte";
  import { writable, derived } from "svelte/store";

  let tabs = [],
    panels = [];

  const activeTab = writable(null);
  const activePanel = writable(null);

  function setActiveIndex(i) {
    index = i;
    activeTab.set(tabs[index]);
    activePanel.set(panels[index]);
  }

  setContext("tabs", {
    registerTab: (tab) => {
      tabs.push(tab);
      if (!$activeTab && tabs.indexOf(tab) === index) {
        activeTab.set(tab);
      }
    },
    registerPanel: (panel) => {
      panels.push(panel);
      if (!$activePanel && panels.indexOf(panel) === index) {
        activePanel.set(panel);
      }
    },
    select: (tab) => {
      setActiveIndex(tabs.indexOf(tab));
    },
    activeTab,
    activePanel,
  });

  export let index = 0;

  $: setActiveIndex(index);
</script>

<slot {index} />
