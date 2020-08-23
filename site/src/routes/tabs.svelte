<script>
  import { Tabs, Tab } from "@esky/tabs";
  import Panel from "../../../packages/tabs/Panel.svelte";
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

<Tabs>
  <div class="tabs">
    <Tab initial>hey</Tab>
    <Tab>hi</Tab>
    <Tab>hello</Tab>
  </div>
  <Panel>
    <div class="panel">One</div>
  </Panel>
  <Panel>
    <div class="panel">Two</div>
  </Panel>
  <Panel>
    <div class="panel">Three</div>
  </Panel>
</Tabs>
