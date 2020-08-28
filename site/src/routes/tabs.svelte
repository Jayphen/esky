<script>
  import { Tabs, Tab } from "@esky/tabs";
  import Panel from "../../../packages/tabs/Panel.svelte";

  let setActiveIndex;
</script>

<style>
  .tabs {
    display: flex;
  }
  :global(.esky-tab) {
    background: hsl(0, 0%, 90%);
    border: 0;
    border-radius: 0;
    padding: 1em;
    margin: 0;
    border: 1px solid hsl(0, 0%, 80%);
    position: relative;
    bottom: -1px;
    font-size: 1em;
    cursor: pointer;
  }
  :global(.esky-tab + .esky-tab) {
    border-left: 0;
  }
  :global(.esky-tab:focus) {
    outline: 0;
    font-weight: bold;
  }
  :global(.esky-active-tab) {
    background: white;
    border-bottom-color: transparent;
    border-top: 2px solid teal;
  }
  .panel {
    padding: 1em;
    border: 1px solid hsl(0, 0%, 80%);
  }
</style>

<h1>Tabs</h1>

<Tabs bind:setActiveIndex>
  <Panel>
    <div class="panel">One</div>
  </Panel>
  <Panel>
    <div class="panel">Two</div>
  </Panel>
  <Panel>
    <div class="panel">Three</div>
  </Panel>
  <div class="tabs">
    <Tab>hey</Tab>
    <Tab>hi I'm in a button already</Tab>
    <Tab renderless let:select let:active let:a11y>
      <button on:click={select} {...a11y.button}>
        {active} -- this tab is renderless so I have to add a button here myself
      </button>
    </Tab>
  </div>
</Tabs>

<button on:click={() => setActiveIndex(2)}>Set index to 2 from outside!</button>
