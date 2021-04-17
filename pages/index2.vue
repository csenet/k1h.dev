<template>
  <div class="jumbotron-fluid pt-5">
    <div class="container-fluid">
      <Timeline/>
    </div>
  </div>
</template>

<script>
export default {
  name: "index2.vue",
  layout: 'simple',
  components: {
    Timeline: () => import('~/components/top/Timeline.vue')
  }
}
</script>

<style scoped>
</style>
