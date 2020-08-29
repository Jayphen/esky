<script>
  import { Tabs, Tab } from "@esky/tabs";
  import Panel from "../../../packages/tabs/Panel.svelte";

  let index = 1;
  let index2 = 1;
  let el, anotherEl;
</script>

<style>
  .tabs {
    display: flex;
  }
  hr {
    margin: 2em 0;
    visibility: hidden;
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
  /* :global(*:focus) {
    outline: 2px solid red;
  } */
  :global(.esky-tab + .esky-tab) {
    border-left: 0;
  }
  :global(.esky-tab:focus) {
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

<Tabs bind:index>
  <div class="tabs" role="tablist">
    <Tab>hey</Tab>
    <Tab>hi I'm in a button already</Tab>
    <Tab renderless let:select let:active let:a11y btn={el} let:handleKeydown>
      <button
        on:click={select}
        {...a11y.button}
        bind:this={el}
        on:keydown={handleKeydown}>
        {active} -- this tab is renderless so I have to add a button here myself
      </button>
    </Tab>
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

<button on:click={() => (index = 2)} disabled={index === 2}>
  Set index to 2 from outside!
</button>
<hr />

<Tabs bind:index2>
  <div class="tabs">
    <Tab>hey</Tab>
    <Tab>hi I'm in a button already</Tab>
    <Tab
      renderless
      let:select
      let:active
      let:a11y
      btn={anotherEl}
      let:handleKeydown>
      <button
        on:click={select}
        {...a11y.button}
        bind:this={anotherEl}
        on:keydown={handleKeydown}>
        {active} -- this tab is renderless so I have to add a button here myself
      </button>
    </Tab>
  </div>
  <Panel let:a11y>
    <div class="panel" {...a11y.panel}>One</div>
  </Panel>
  <Panel let:a11y>
    <div class="panel" {...a11y.panel}>Two</div>
  </Panel>
  <Panel let:a11y>
    <div class="panel" {...a11y.panel}>Three</div>
  </Panel>
</Tabs>

<p>Keyboard nav (when a tab has focus)</p>

<ul>
  <li>
    <strong>Left Arrow</strong>
    - select previous tab
  </li>
  <li>
    <strong>Right Arrow</strong>
    - select next tab
  </li>
  <li>
    <strong>Home</strong>
    - select first tab
  </li>
  <li>
    <strong>End</strong>
    - select last tab
  </li>
  <li>
    <strong>Tab</strong>
    - Focus content
  </li>
</ul>
