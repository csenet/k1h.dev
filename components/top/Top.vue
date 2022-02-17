<template>
  <div class="jumbotron jumbotron-fluid text-dark mb-0">
    <div class="container text-center py-5">
      <b-img-lazy
          class="avatar"
          :src='require("~/assets/img/icon.png?webp")'
          alt="My Photo"
          rounded="circle"
          width="200"
          height="200"
      >
      </b-img-lazy>
      <h1 class="display-5 pt-3">VOID</h1>
      <p>
        Student, Engineer
      </p>
      <a href="https://twitter.com/k1h_tech">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="https://github.com/csenet">
        <i class="fab fa-github"></i>
      </a>
      <!--      <p>-->
      <!--        AtCorder:-->
      <!--        <a href="https://atcoder.jp/users/KOU314" class="text-dark">KOU314</a>-->
      <!--      </p>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Top.vue"
}
</script>

<style scoped lang="scss">

img {
  transform: rotate(0);

  &:hover {
    transform: rotate(-360deg);
    transition: transform .5s;
  }
}

.jumbotron {
  background: linear-gradient(
          48deg, #83ccd2, #c7dc68);
  background-size: 400% 400%;
}
</style>
