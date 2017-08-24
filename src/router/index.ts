declare var __dirname;

import Vue from 'vue';
import VueRouter from 'vue-router';

/* Global Components */
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
/* /Global Components */

/* PAGES */
import Home from '../components/pages/Home/Home.vue';
/* /PAGES */

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{
        path: '/',
        components: {
            header: Header,
            content: Home,
            footer: Footer
        }
    }, {
        path: '/full',
        components: {
            content: Home
        }
    }]
});

export default router;
