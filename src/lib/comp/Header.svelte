<script lang="ts">
  import icon from '$lib/img/icon.svg';

  export let offsetHeight: number | undefined = undefined;
</script>

<nav class="sticky-top" bind:offsetHeight>
  <header class="py-2 bg-body-tertiary border-bottom">
    <div class="container d-flex flex-wrap justify-content-center">
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none"
      >
        <img
          src={icon}
          class="me-2"
          width="40"
          height="32"
          alt="Team CAUTION 1492 Robotics Team Logo"
        />
        <h1 class="fs-4 mb-0">Team&nbsp;CAUTION 1492</h1>
      </a>
      <!-- <ul class="nav me-auto"></ul>
      <ul class="nav">
        <li class="nav-item">
          <a
            href="#"
            class="nav-link link-body-emphasis px-2 active"
            aria-current="page">Home</a
          >
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link link-body-emphasis px-2">About Us</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link link-body-emphasis px-2">Gallery</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link link-body-emphasis px-2">Off-Season</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link link-body-emphasis px-2">Support</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link link-body-emphasis px-2">Get Involved</a>
        </li>
      </ul> -->
    </div>
  </header>
</nav>
