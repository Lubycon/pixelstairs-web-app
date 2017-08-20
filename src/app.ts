import Vue from 'vue';
import App from './App.vue';
import store from './stores/store';
import store1 from './stores/store1';
import router from './router';
import { sync } from 'vuex-router-sync';

console.log(store1);

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
