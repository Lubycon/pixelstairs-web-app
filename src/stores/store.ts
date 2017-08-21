import Vue from 'vue';
import Vuex from 'vuex';

/* STORES START */
import { AuthStoreModule } from './auth/';
/* STORES END */

Vue.use(Vuex);

const isClient = typeof window !== 'undefined';

export default new Vuex.Store({
    modules: {
        auth: new AuthStoreModule()
    }
})
