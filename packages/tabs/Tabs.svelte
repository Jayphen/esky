<script>
  import { setContext, onDestroy, onMount } from "svelte";
  import { writable, derived } from "svelte/store";

  let tabs = [],
    panels = [];

  const activeTab = writable(null);
  const activePanel = writable(null);

  export let setActiveIndex = function setActiveIndex(index) {
    activeTab.set(tabs[index]);
    activePanel.set(panels[index]);
  };
  export let initialIndex = 0;

  setContext("tabs", {
    registerTab: (tab) => {
      tabs.push(tab);
      if (!$activeTab && tabs.indexOf(tab) === initialIndex) {
        activeTab.set(tab);
      }
    },
    registerPanel: (panel) => {
      panels.push(panel);
      if (!$activePanel && panels.indexOf(panel) === initialIndex) {
        activePanel.set(panel);
      }
    },
    select: (tab) => {
      activeTab.set(tab);
      activePanel.set(panels[tabs.indexOf(tab)]);
    },
    activeTab,
    activePanel,
  });
</script>

<slot {setActiveIndex} />
