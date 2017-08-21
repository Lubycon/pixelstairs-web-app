import Vue from 'vue';
import App from './App.vue';
import store from './stores/store';
import router from './router';
import { sync } from 'vuex-router-sync';

export function createApp () {
    sync(store, router);
    console.log(store);

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
