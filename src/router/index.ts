declare var __dirname;

import Vue from 'vue';
import VueRouter from 'vue-router';

/* Global Components */
import Header from 'src/components/Header/Header.vue';
import Footer from 'src/components/Footer/Footer.vue';
/* /Global Components */

/* PAGES */
import Home from 'src/pages/Home/Home.vue';
import Signin from 'src/pages/Account/Signin/Signin.vue';
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
        path: '/signin',
        components: {
            content: Signin
        }
    }]
});

export default router;
