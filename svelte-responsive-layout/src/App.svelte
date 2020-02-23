<script>
  import { onMount, onDestroy } from 'svelte';
  import TopNav from './TopNav.svelte';
  import ContentButton from './ContentButton.svelte';
  import ResponsiveImage from './ResponsiveImage.svelte';

  let detached = false;

  function handleScrollChange({ target }) {
    detached = !!window.scrollY;
  }

  onMount(() => document.addEventListener('scroll', handleScrollChange));

  onDestroy(() => document.removeEventListener('scroll', handleScrollChange));

  function handleDiscoverButtonClick() {
    location.href = "https://github.com/sveltejs/svelte";
  }
</script>

<!--
  There are some troubles with PostCss here.
  We cannot use autocomplete because of some issues with svelte-vscode
-->
<style type="text/postcss">
  @custom-media --big-viewport (min-width: 640px);

  :root {
    --main-color: #fff;
    --secondary-color: #45557e;

    --header-height: 10vh;
  }

  .page-layout {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;

    .page-header-layout & {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
    }

    @media (--big-viewport) {
      width: 70vw;
      padding: 0;
    }
  }

  .page-header-layout {
    height: var(--header-height);
    position: sticky;
    top: 0;
    background-color: var(--main-color);
    z-index: 1;
    transition: box-shadow 0.3s;

    &.detached {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    }
  }

  .page-header-logo {
    text-decoration: none;
    color: var(--secondary-color);
    font-weight: 500;
    font-size: 1.2em;
  }

  .content-layout {
    @media (--big-viewport) {
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 5vw;
    }

    :global(.button-layout) {
      height: max-content;
      margin: 0 auto;
      margin-top: 3em;
      margin-bottom: 5vh;
      display: block;

      @media (--big-viewport) {
        margin-top: 5em;
      }
    }

    :global(.picture-layout) {
      margin-bottom: 20px;

      @media (--big-viewport) {
        margin-bottom: 0;
        grid-row: 1 / 5;
        grid-column: 2;
      }
    }

    :global(.title-layout) {
      margin: 0;
      margin-bottom: 2rem;
    }
  }

  .page-title {
    font-weight: 100;
    font-size: 2rem;
    color: var(--secondary-color);
  }

  .content-text {
    color: #999;
    font-weight: 300;
    line-height: 1.5em;
    font-size: 0.7em;
    display: inline-block;
    width: 100%;
    text-align: justify;
  }
</style>

<header
  class="page-header-layout"
  class:detached="{detached}"
>
  <div class="page-layout">
    <a
      href="/"
      class="page-header-logo"
    >
      Logo &#8482;
    </a>
    <TopNav
      items={[
        { to: 'https://svelte.dev/tutorial/declaring-props', title: 'Props'},
        { to: 'https://svelte.dev/tutorial/onmount', title: 'Lifecycle'},
        { to: 'https://svelte.dev/tutorial/slots', title: 'Slots'},
        { to: 'https://svelte.dev/tutorial/reactive-assignments', title: 'Reactivity'}
      ]}
    />
  </div>
</header>

<div class="page-layout">
  <div class="content-layout">
    <h1 class="title-layout page-title">
      Lorem ipsum dolor sit, amet
    </h1>

    <ResponsiveImage
      class="picture-layout"
      variants={[
        { breakpoint: '639px', src: '/assets/mobile.png' },
        { breakpoint: null, src: '/assets/desktop.png', alt: "some image" }
      ]}
    />

    <span class="content-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Vel reprehenderit sequi alias ab quo, itaque iusto corrupti,
      fugit quas officiis in odit ipsam nobis architecto animi molestiae rem libero porro?
    </span>

    <!--
      There is a problem with passing classes.
      I have to make it global and assign to the parent for the scoping
    -->
    <!--
      Another problem is that navigation by command + click doesn't work for svelte templates
    -->
    <ContentButton
      class="button-layout"
      on:click={handleDiscoverButtonClick}
    >
      Discover Svelte
    </ContentButton>
  </div>
</div>
