import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload, {
    lazyComponent: true,
    error: '/img/error.jpg',
    loading: '/img/loading.jpg',
    attempt: 1,
    throttleWait:200
});
