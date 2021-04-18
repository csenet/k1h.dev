<template>
  <b-navbar
    type="light"
    variant="light"
    class="border-bottom shadow"
    toggleable="lg"
    fixed="bottom"
  >
    <b-container>
      <b-navbar-brand to="/">VOID's Portfolio</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto text-center">
          <b-nav-item to="/works" class="navbar-item">Works</b-nav-item>
          <b-nav-item to="/contact" class="navbar-item">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<style lang="scss" scoped>
@import "node_modules/bootstrap/scss/bootstrap";

.navbar-item{
  margin: 0 2rem;
  position: relative;
  display: inline-block;
  text-decoration: none;
  :after{
    position: absolute;
    bottom: -4px;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    background: #333;
    transform: scale(0, 1);
    transform-origin: center top;
    transition: transform .3s;
  }
  :hover:after{
    transform: scale(1, 1);
  }
}
</style>
