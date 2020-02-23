<script>
  export let isActive;
</script>

<style type="text/postcss">
  .toggle-icon {
    width: 100%;
    height: 100%;

    path {
      stroke: currentColor;
      stroke-width: 2;
      transition: d 0.3s;

      &:nth-child(1) {
        d: path("M0 8 L 32 8");

        .active & {
          d: path("M0 0 L 32 32");
        }
      }

      &:nth-child(2) {
        d: path("M0 16 L 32 16");

        .active & {
          opacity: 0;
        }
      }

      &:nth-child(3) {
        d: path("M0 24 L 32 24");

        .active & {
          d: path("M32 0 L 0 32");
        }
      }
    }
  }
</style>

<div class:active={isActive}>
  <svg
    viewbox="0 0 32 32"
    class="toggle-icon"
  >
    <path />
    <path />
    <path />
  </svg>
</div>