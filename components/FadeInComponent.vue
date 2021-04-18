<template>
  <div :class="{fadeIn: visible}">
    <slot v-show="visible"></slot>
  </div>
</template>

<script>
export default {
  name: "FadeInComponent",
  data() {
    return {
      visible: false
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (!this.visible) {
        var top = this.$el.getBoundingClientRect().top;
        this.visible = top < window.innerHeight + 100;
      }
    }
  }
}
</script>

<style scoped>

.fadeIn {
  animation: fadeIn 1s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
