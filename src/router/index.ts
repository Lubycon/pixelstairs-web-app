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
import Signup from 'src/pages/Account/Signup/Signup.vue';

import ArtworkDetail from 'src/pages/Artwork/ArtworkDetail.vue';
/* /PAGES */

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{
        path: '/',
        name: 'home',
        components: {
            header: Header,
            content: Home,
            footer: Footer
        }
    }, {
        path: '/signin',
        name: 'signin',
        components: {
            content: Signin
        }
    }, {
        path: '/signup',
        name: 'signup',
        components: {
            content: Signup
        }
    }, {
        path: '/artwork/:artId',
        name: 'artwork-detail',
        components: {
            header: Header,
            content: ArtworkDetail,
            footer: Footer
        },
        props: {
            content: true
        }
    }]
});

export default router;
