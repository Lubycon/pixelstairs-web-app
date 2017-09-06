/*
    @name: app.ts
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
