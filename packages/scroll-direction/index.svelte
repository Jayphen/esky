<script>
  export let touchOnly = false,
    offset = 10;

  let touched = false;

  let direction = "up";
  let prevMove = 0;

  function setStartPosition(e) {
    if (touchOnly) touched = true;

    prevMove = e.touches[0].clientY;
  }

  function detectScrollDirection() {
    if (touchOnly && !touched) return;

    let thisMove = window.scrollY;

    const { scrollHeight, clientHeight } = document.documentElement;
    const maxHeight = scrollHeight - clientHeight;

    if (thisMove <= 0) {
      direction = "up";
      prevMove = thisMove;
      return;
    }

    if (thisMove >= maxHeight) {
      direction = "down";
      prevMove = thisMove;
      return;
    }

    if (prevMove > thisMove + offset) {
      direction = "up";
    } else if (prevMove < thisMove - offset) {
      direction = "down";
    }

    prevMove = thisMove;
  }
</script>

<svelte:window
  on:touchstart|passive={setStartPosition}
  on:scroll|passive={detectScrollDirection} />

<slot {direction} />
