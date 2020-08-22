<script>
  export let touchOnly = false,
    minVelocity = 0.2;

  let touched = false;

  let direction = "initial";
  let prevMove = [0, 0];

  function setStartPosition(e) {
    if (touchOnly) touched = true;

    prevMove = [e.touches[0].clientY, e.timeStamp];
  }

  function detectScrollDirection(e) {
    if (touchOnly && !touched) return;

    const [prevY, prevTime] = prevMove;
    const now = e.timeStamp;
    const { scrollHeight, clientHeight } = document.documentElement;
    const maxHeight = scrollHeight - clientHeight;
    const elapsed = now - prevTime;

    let thisY = window.scrollY;
    if (thisY > maxHeight) thisY = maxHeight;
    if (thisY <= 0) thisY = 0;

    const scrolled = thisY - prevY;
    const velocity = scrolled / elapsed;

    prevMove = [thisY, e.timeStamp];

    if (Math.abs(velocity) < minVelocity) return;

    direction = velocity > 0 ? "down" : "up";
  }
</script>

<svelte:window
  on:touchstart|passive={setStartPosition}
  on:scroll|passive={detectScrollDirection} />

<slot {direction} position={prevMove[0]} />
