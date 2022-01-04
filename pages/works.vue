<template>
  <b-jumbotron fluid class="mb-0 py-5" text-variant="dark" bg-variant="light">
    <b-container>
      <div class="text-center">
        <h1>Works</h1>
        <p>今まで作成したものや携わった作品です<br>今後，もっと追加予定</p>
      </div>
      <div class="row row-cols-1 row-cols-md-2  row-cols-lg-3 g-4">
        <div v-for="work in data" :key="work.title" class="col">
          <div class="card my-2">
            <img
                v-lazy="require('~/assets/works/' + work.slag + '/thumnail.jpg?webp')"
                :alt="work.title"
                type="image/webp"
            />
            <div class="card-body">
              <h5 class="card-title">{{ work.title }}</h5>
              <p class="card-text">
                {{ work.outline }}
              </p>
              <button @click="show(work.title)" class="btn btn-outline-dark">Read More</button>
              <modal :name="work.title" width="90%" height="auto" :scrollable="true" class="py-2">
                <b-container class="pt-5">
                  <div v-html="require('~/assets/works/' + work.slag + '/about.md').default" class="py-1"></div>
                  <b-button @click="hide(work.title)" variant="outline-dark" class="my-2">Close</b-button>
                </b-container>
              </modal>
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </b-jumbotron>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({data: "works/getAll"}),
  },
  methods: {
    show(name) {
      this.$modal.show(name);
    },
    hide(name) {
      this.$modal.hide(name);
    },
    getRendered(path) {
      return $md.render(JSON.stringify(require(path).default));
    }
  }
};
</script>
<style scoped>
h1 {
  text-align: center !important;
}
</style>
