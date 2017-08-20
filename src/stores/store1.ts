import Vue from 'vue';
import Vuex from 'vuex';

/* STORES START */
import AuthStore from './auth/+store';
/* STORES END */

Vue.use(Vuex);

const isClient = typeof window !== 'undefined';

export default {};
