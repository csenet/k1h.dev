<template>
  <div class="jumbotron jumbotron-fluid bg-white text-dark mt-0 mb-0 pt-2 pb-2">
    <div class="container text-center">© {{ year }} KOU</div>
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