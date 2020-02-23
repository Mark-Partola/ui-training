<script>
  export let variants = [];
</script>

<style type="text/postcss">
  .picture-source {
    width: 100%;
    text-align: center;

    source, img {
      max-width: 300px;
      width: 100%;
    }
  }
</style>

<!--
  Another problem of DX in Svelte - build passes without any errors, but cannot be run
-->
<picture class="picture-source {$$props.class}">
  {#each variants as { breakpoint, src, alt }}
    {#if breakpoint}
      <source
        media="(max-width: {breakpoint})"
        srcset="{src}"
      />
    {:else}
      <img
        alt={alt}
        srcset={src}
      />
    {/if}
  {/each}
</picture>