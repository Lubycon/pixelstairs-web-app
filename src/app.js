/*
    @name: app.js
    @desc: app init 파일
    @author: Evan Moon
    @created_at: 2017.08.19
*/

import Vue from 'vue';
import App from './App.vue';
import store from './stores/store';
import router from './router';
import { sync } from 'vuex-router-sync';

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
Vue.use(BootstrapVue);

import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

import VueMoment from 'vue-moment';
Vue.use(VueMoment);

if (process.browser) {
    const VueAwesomeSwiper = require('vue-awesome-swiper/ssr');
    Vue.use(VueAwesomeSwiper);
}

export function createApp () {
    sync(store, router);

    const app = new Vue({
        router,
        store,
        render: h => h(App)
    });

    return {
        app,
        router,
        store
    };
}
