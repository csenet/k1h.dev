<template>
  <div>
    <Top/>
    <Aboutme />
    <Timeline/>
    <Slideshow />
  </div>
</template>
<script>
import Skills from "~/components/Skills.vue";
import Timeline from "~/components/top/Timeline.vue";
import Aboutme from "~/components/top/Aboutme.vue";
import Top from "~/components/top/Top.vue";
import Slideshow from "~/components/top/Slideshow.vue";
import {mapGetters} from "vuex";

export default {
  components: {
    Skills,
    Timeline,
    Aboutme,
    Top,
    Slideshow
  },
  computed: {
    ...mapGetters({data: "works/getAll"}),
  },
  data() {
    return {
      self: require("~/assets/img/icon.png"),
      isGachaAvailable: false, // Turn on off ガチャ機能
    };
  },
};
</script>
<style>
.fab,
.fas {
  font-size: 30px;
  color: gray;
  padding: 0.3em 5px 1em;
}

.fab:hover,
.fas:hover {
  color: black;
}

.icons {
  max-width: 100px;
  width: 30%;
  margin: 10px 10px;
}

@media screen and (min-width: 650px) {
  .br-pc {
    display: block;
  }

  .br-sp {
    display: none;
  }
}

@media screen and (max-width: 650px) {
  .br-pc {
    display: none;
  }

  .br-sp {
    display: block;
  }
}

@media screen and (min-width: 650px) {
  .br-pc {
    display: block;
  }

  .br-sp {
    display: none;
  }
}

@media screen and (max-width: 650px) {
  .br-pc {
    display: none;
  }

  .br-sp {
    display: block;
  }
}
</style>
