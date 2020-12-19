<template>
  <b-navbar
    type="light"
    variant="white"
    class="border-bottom shadow-sm"
    toggleable="lg"
  >
    <b-container>
      <b-navbar-brand to="/">Koichi Hirachi</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/works">Works</b-nav-item>
          <b-nav-item to="/skills">Skills</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>