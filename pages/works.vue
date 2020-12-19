<template>
  <div class="jumbotron jumbotron-fluid bg-white text-dark pt-3 mb-0 pb-5">
    <div class="container">
      <h1>Works</h1>
      <p>今まで作成したものや携わった作品です</p>
      <div class="card-deck">
        <div v-for="work in data" :key="work.title">
          <div
            class="card mb-2 text-center"
            style="max-width: 20rem; word-break: keep-all"
          >
            <img
              v-lazy="require('~/assets/works/' + work.slag + '/thumnail.jpg')"
              :alt="work.title"
              width="100%"
            />
            <div class="card-body">
              <h5 class="card-title">{{ work.title }}</h5>
              <p class="card-text">
                {{ work.outline }}
              </p>
              <button href="#" class="btn btn-outline-dark">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({ data: "works/getAll" }),
  },
};
</script>
