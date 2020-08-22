<script>
  import { Tabs, Tab } from "@esky/tabs";
  import Panel from "../../../packages/tabs/Panel.svelte";
</script>

<style>
  :global(.esky-active-tab) {
    color: green;
  }
</style>

<h1>Tabs</h1>

<Tabs>
  <div>
    <Tab>hey</Tab>
    <Tab>hi</Tab>
    <Tab>hello</Tab>
  </div>
  <Panel>One</Panel>
  <Panel>Two</Panel>
  <Panel>Three</Panel>
</Tabs>
