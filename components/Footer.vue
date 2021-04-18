<template>
  <div class="jumbotron jumbotron-fluid bg-dark text-light mt-0 mb-0 pt-2 pb-2">
    <nav class="navigation">
      <ul>
        <li>
          <nuxt-link to="/" class="item">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/works" class="item">Works</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact" class="item">Contact</nuxt-link>
        </li>
      </ul>
    </nav>
    <div class="container text-center pt-3 pb-3 copyright">© {{ year }} VOID</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      year: "",
    };
  },
  mounted() {
    const today = new Date();
    this.year = today.getFullYear();
  },
};
</script>
<style lang="scss" scoped>

nav {
  ul {
    display: flex;
    flex-flow: row;
    justify-content: center;
    margin: 0;
    padding: 6px;
    list-style-type: none;
  }
  a {
    margin:0 1.6rem;
    text-decoration: none;
    display: block;
    border-radius: 30px;
    padding: 12px 24px;
    color: white;
    transition: all 0.3s;
  }
  a:hover {
    background-color: white;
    opacity: 0.8;
    color:black;
  }
}
.copyright:before{
  width:30px;
  height:3px;
  background:white;
}

</style>
