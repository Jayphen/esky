<script>
  import { onDestroy, onMount, createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let threshold = 0,
    offset = "0px",
    element,
    once = false;

  let supported;

  let inView = false,
    observerInstance;

  let triggered = false;
  let mounted = false;

  function observe(el) {
    if (!el || !supported) return;

    observerInstance = new IntersectionObserver(onChange, {
      rootMargin: offset,
      threshold,
    });

    observerInstance.observe(el);
  }

  function onChange(changes) {
    if (once && triggered) return;
    inView = changes[0].isIntersecting;
  }

  onMount(() => {
    supported =
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype;
    if (!supported) inView = true;
    mounted = true;
  });

  onDestroy(() => {
    element && observerInstance.unobserve(element);
  });

  $: mounted && observe(element);

  $: dispatch(inView ? "entered" : "exited");

  $: if (inView && !triggered) triggered = true;
</script>

<slot {inView} />
