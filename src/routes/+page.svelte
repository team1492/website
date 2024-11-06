<script lang="ts">
  import Header from '$lib/comp/Header.svelte';
  import Footer from '$lib/comp/Footer.svelte';
  import Subdomain from '$lib/Subdomain';
  import icon from '$lib/img/icon.svg';

  let headerHeight: number;
  let footerHeight: number;
  let windowHeight: number;
  let containerHeight: number;
</script>

<svelte:window bind:innerHeight={windowHeight} />

<Header bind:offsetHeight={headerHeight}></Header>

<div class="container" bind:offsetHeight={containerHeight}>
  <div
    class="row align-items-center gx-5"
    style="max-width: 75em; min-height: calc({windowHeight}px - {headerHeight}px - {footerHeight}px); padding-bottom: {footerHeight}px;"
  >
    <div class="col-12 col-lg-4 d-none d-lg-block">
      <div class="my-3">
        <img src={icon} alt="Team CAUTION 1492 Robotics Team Logo" />
      </div>
    </div>
    <div
      class="col-12 col-lg-4 position-absolute top-50 start-50 translate-middle d-block d-lg-none opacity-25 z-n1 w-75"
    >
      <div class="my-3 opacity-25 overflow-hidden">
        <img
          src={icon}
          class="img-fluid"
          alt="Team CAUTION 1492 Robotics Team Logo"
        />
      </div>
    </div>
    <div class="col-12 col-lg-8">
      <div class="my-3">
        <h5 class=" fs-1">Welcome to Team&nbsp;CAUTION!</h5>
      </div>
      <div class="my-3 fs-5">
        <p>
          Team CAUTION, originally founded as the Arizona Community Robotics
          Team in 2004 with the support of Microchip Technology, is based at Microchip's Tempe Campus
          <a
            href="https://www.google.com/maps/search/?api=1&query=2100 W 14th St, Tempe, AZ 85281"
            class="text-nowrap">(2100 W 14th St, Tempe, AZ 85281)</a
          >. Since its inception, the team has provided students from across
          Arizona the opportunity to participate in FIRST Robotics. Driven by a
          desire to offer students from schools without robotics programs a
          chance to compete, Team CAUTION has evolved into a thriving community
          organization. For nearly two decades, the team has inspired future
          leaders and innovators through its commitment to STEAM education,
          leadership development, and community outreach.
          <br />
          <br />
          After a brief hiatus in 2022, Team CAUTION has returned with renewed energy
          and purpose. A dedicated group of alumni, mentors, and industry professionals
          has come together to reestablish the team, with an even stronger focus
          on competitive excellence and community service. With the continued support
          of Microchip, we are committed to equipping the next generation of problem
          solvers and compassionate leaders, empowering them to make a positive impact
          through the transformative power of robotics.
          <br />
          <br />
          Learn about <a href="https://www.firstinspires.org/robotics/frc">FIRST Robotics Competition</a> or
          <a href="https://www.firstinspires.org">other FIRST Robotics programs</a> for
          all ages.
        </p>
      </div>
      <div class="row justify-content-center gx-5 d-none d-lg-flex">
        <div class="col-auto">
          <a class="btn btn-primary my-3" href={Subdomain('links', 'join')}
            >Join The Team</a
          >
        </div>
        <div class="col-auto">
          <a class="btn btn-primary my-3" href={Subdomain('links', 'volunteer')}
            >Volunteer</a
          >
        </div>
        <div class="col-auto">
          <a class="btn btn-primary my-3" href={Subdomain('links', 'contact')}
            >Contact Us</a
          >
        </div>
      </div>
    </div>
  </div>
</div>

<div class="sticky-bottom">
  <Footer bind:offsetHeight={footerHeight}></Footer>
</div>

<style>
  .sticky-bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
</style>
