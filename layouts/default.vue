<template>
  <div>
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Navbar from "~/components/Navigation.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
body {
  font-family: Ubuntu, "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN",
    "Hiragino Sans", Meiryo, sans-serif;
}
.subtitle {
  display: block;
  padding-left: 8px;
  border-left: 3px solid #1a1a1a;
  padding-top: 5px;
}
</style>
