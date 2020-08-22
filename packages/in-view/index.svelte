<script>
  import { onDestroy } from "svelte";

  export let threshold = 0,
    offset = "0px",
    element;

  let inView = false,
    observerInstance;

  function observe(el) {
    if (!el) return;

    observerInstance = new IntersectionObserver(onChange, {
      rootMargin: offset,
      threshold,
    });

    observerInstance.observe(el);
  }

  function onChange(changes) {
    inView = changes[0].isIntersecting;
  }

  onDestroy(() => {
    element && observerInstance.unobserve(element);
  });

  $: observe(element);
</script>

<slot {inView} />
