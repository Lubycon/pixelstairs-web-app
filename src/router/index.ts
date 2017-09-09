/*
    @name: router/index.ts
    @desc: 픽셀스테어스 라우팅 모듈
    @author: Evan Moon
    @created_at: 2017.08.26
*/

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
import User from 'src/pages/User/User.vue';
import UserProfile from 'src/pages/User/Profile/UserProfile.vue';
import UserSetting from 'src/pages/User/Setting/UserSetting.vue';

import ArtworkDetail from 'src/pages/Artwork/ArtworkDetail/ArtworkDetail.vue';
import ArtworkUpload from 'src/pages/Artwork/ArtworkUpload/ArtworkUpload.vue';
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
        path: '/user/:userId',
        components: {
            header: Header,
            content: User,
            footer: Footer,
        },
        props: {
            content: true
        },
        children: [{
            path: 'setting',
            name: 'user-setting',
            component: UserSetting,
            props: true
        },{
            path: '',
            name: 'user-profile',
            component: UserProfile,
            props: true
        }]
    }, {
        path: '/artwork/detail/:artId',
        name: 'artwork-detail',
        components: {
            header: Header,
            content: ArtworkDetail,
            footer: Footer
        },
        props: {
            content: true
        }
    }, {
        path: '/artwork/upload',
        name: 'artwork-upload',
        components: {
            header: Header,
            content: ArtworkUpload,
            footer: Footer
        }
    }]
});

export default router;
