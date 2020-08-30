<script>
  import { getContext } from "svelte";

  export let renderless = false;
  export let btn;

  const tab = { renderless };
  const { registerTab, activeTab, select, id, tabs, modality } = getContext(
    "tabs"
  );

  let selected = false;

  registerTab(tab);

  $: selected = $activeTab === tab;

  $: index = tabs.indexOf(tab);

  $: a11y = {
    button: {
      role: "tab",
      "aria-controls": `${id}-panel-${index}`,
      "aria-selected": selected,
      id: `${id}-tabs-${index}`,
      tabindex: selected ? 0 : -1,
      type: "button",
    },
  };

  function handleClick() {
    select(tab);
  }

  function next(e) {
    e.preventDefault();
    const length = tabs.length;
    let next = index + 1;

    select(tabs[next % length]);
  }

  function prev(e) {
    e.preventDefault();
    let prev = index ? index - 1 : tabs.length - 1;

    select(tabs[prev]);
  }

  function end(e) {
    e.preventDefault();
    select(tabs[tabs.length - 1]);
  }

  function home(e) {
    e.preventDefault();
    select(tabs[0]);
  }

  function handleKeydown(e) {
    switch (e.key) {
      case "ArrowLeft":
        prev(e);
        break;
      case "ArrowRight":
        next(e);
        break;
      case "Home":
        home(e);
        break;
      case "End":
        end(e);
        break;
      default:
        break;
    }
  }

  $: console.log("modality fgrom tab", $modality);

  $: if (selected && btn && $modality === "keyboard") btn.focus();

  console.log($$props.$$slots);
</script>

{#if !renderless}
  <button
    bind:this={btn}
    on:click={handleClick}
    class="esky-tab"
    class:esky-active-tab={selected}
    {...a11y.button}
    on:keydown={handleKeydown}>
    <slot />
  </button>
{:else}
  <slot select={() => select(tab)} active={selected} {a11y} {handleKeydown} />
{/if}
