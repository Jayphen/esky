<script>
  import { onDestroy, onMount } from "svelte";

  export let threshold = 0,
    offset = "0px",
    element;

  let unsupported;

  let inView = false,
    observerInstance;

  function observe(el) {
    if (!el || unsupported) return;

    observerInstance = new IntersectionObserver(onChange, {
      rootMargin: offset,
      threshold,
    });

    observerInstance.observe(el);
  }

  function onChange(changes) {
    inView = changes[0].isIntersecting;
  }

  onMount(() => {
    unsupported =
      !"IntersectionObserver" in window &&
      !"IntersectionObserverEntry" in window &&
      !"intersectionRatio" in window.IntersectionObserverEntry.prototype;
    if (unsupported) inView = true;
  });

  onDestroy(() => {
    element && observerInstance.unobserve(element);
  });

  $: observe(element);
</script>

<slot {inView} />
