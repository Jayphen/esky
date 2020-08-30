<script>
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import { genId } from "./genId";

  const id = `esky-tabs-${genId()}`;

  const modality = writable(null);

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
      const index = tabs.indexOf(tab);
      setActiveIndex(index);
    },
    activeTab,
    activePanel,
    id,
    tabs,
    panels,
    modality,
  });

  export let index = 0;

  $: setActiveIndex(index);

  function isValidKey(e) {
    return !(e.metaKey || e.ctrlKey);
  }
</script>

<slot {index} />

<svelte:window
  on:mousemove={() => modality.set('pointer')}
  on:keydown={(e) => isValidKey(e) && modality.set('keyboard')}
  on:blur={() => modality.set(null)} />
