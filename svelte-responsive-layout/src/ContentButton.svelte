<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('click');
  }
</script>

<style type="text/postcss">
  :root {
    --bg-color: #65d1e2;
    --bg-hover-color: #45b1c2;
    --bg-active-color: #25a1a2;
  }

  .content-button {
    border: none;
    background-color: var(--bg-color);
    font-size: 0.7em;
    padding: 1em;
    color: var(--main-color);
    transition: background-color 0.3s;
    cursor: pointer;

    &:hover {
      background-color: var(--bg-hover-color);
    }

    &:active {
      background-color: var(--bg-active-color);
    }
  }
</style>

<button class="content-button {$$props.class}" on:click={handleClick}>
  <slot />
</button>
