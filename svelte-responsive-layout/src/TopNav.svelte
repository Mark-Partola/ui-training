<script>
  import ToggleIcon from './icons/ToggleIcon.svelte';

  export let items;

  let isActive = false;

  function handleToggleMenu() {
    isActive = !isActive;    
  }

  function handleCloseToggleMenu() {
    isActive = false;    
  }
</script>

<style type="text/postcss">
  .top-nav {
    color: var(--secondary-color);

    &-toggler {
      display: flex;
      align-items: center;
      height: 24px;
      width: 24px;
      padding: 0;
      border: none;
      background-color: transparent;

      @media(--big-viewport) {
        display: none;
      }
    }

    &-list {
      display: flex;
      list-style-type: none;
      position: fixed;
      overflow: auto;
      overscroll-behavior: contain;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.9);
      opacity: 0;
      pointer-events: none;
      flex-direction: column;
      align-items: center;
      margin-top: var(--header-height);
      padding: 1em;
      color: var(--main-color);
      font-size: 2em;

      @media(--big-viewport) {
        position: static;
        background-color: transparent;
        color: inherit;
        font-size: 1em;
        flex-direction: row;
        margin: 0;
        padding: 0;
        opacity: 1;
        pointer-events: auto;
      }

      .active & {
        opacity: 1;
        pointer-events: auto;
        transition: opacity 0.3s;
      }

      a {
        color: inherit;
        opacity: 0.6;
        text-decoration: none;
        transition: opacity 0.3s;
        
        &:hover {
          opacity: 1;
          text-decoration: underline;
        }
      }

      & > li {
        &:not(:last-child) {
          margin-bottom: 0.5em;
        }

        @media(--big-viewport) {
          font-size: 0.7em;

          &:not(:last-child) {
            margin-bottom: 0;
            margin-right: 1em;
          }
        }
      }            
    }
  }
</style>

<nav
  class="top-nav"
  class:active={isActive}
>
  <button
    class="top-nav-toggler"
    on:click={handleToggleMenu}
  >
    <ToggleIcon isActive={isActive} />
  </button>
  <ul class="top-nav-list">
    {#each items as item }
      <li>
        <a href="{item.to}" on:click={handleCloseToggleMenu}>
          {item.title}
        </a>
      </li>
    {/each}
  </ul>
</nav>