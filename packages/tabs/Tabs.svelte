<script>
  import { setContext, onDestroy } from "svelte";
  import { writable, derived } from "svelte/store";

  let tabs = [],
    panels = [];

  const activeTab = writable(null);
  const activePanel = writable(null);

  setContext("tabs", {
    registerTab: (tab) => {
      tabs.push(tab);
      if (tab.initial) {
        activeTab.set(tab);
      }
    },
    registerPanel: (panel) => {
      panels.push(panel);
      const index = panels.indexOf(panel);
      const tabIndex = tabs.indexOf($activeTab);
      if (!$activePanel && index === tabIndex) {
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

<slot />
