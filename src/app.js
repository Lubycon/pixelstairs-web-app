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

import { PERMISSIONS } from 'src/constants';

// Bootstrap
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
Vue.use(BootstrapVue);

// Validator
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

// Moment
import VueMoment from 'vue-moment';
Vue.use(VueMoment);

import Permission from 'src/plugin/Permission.plugin';
Vue.use(Permission, {
    router,
    store,
    permissions: PERMISSIONS
});

// only for Client
if (process.browser) {
    // Swiper
    const VueAwesomeSwiper = require('vue-awesome-swiper/ssr');
    Vue.use(VueAwesomeSwiper);

    // SweetAlert2
    const VueSweetalert2 = require('vue-sweetalert2');
    Vue.use(VueSweetalert2.default);
    Vue.swal.setDefaults({
        buttonsStyling: false,
        customClass: 'pxs-swal',
        padding: 'auto',
        width: 'auto',
        reverseButtons: true,
        confirmButtonClass: 'btn btn-primary',
        cancelButtonClass: 'btn'
    });

    const VueinfiniteScroll = require('vue-infinite-scroll');
    Vue.use(VueinfiniteScroll);
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
