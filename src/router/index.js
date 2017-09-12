/*
    @name: router/index.ts
    @desc: 픽셀스테어스 라우팅 모듈
    @author: Evan Moon
    @created_at: 2017.08.26
*/

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
import Signdrop from 'src/pages/Account/Signdrop/Signdrop.vue';

import AuthGrade from 'src/pages/Auth/AuthGrade/AuthGrade.vue';
import AuthGradeLanding from 'src/pages/Auth/AuthGradeLanding/AuthGradeLanding.vue';
import AuthPassword from 'src/pages/Auth/AuthPassword/AuthPassword.vue';
import AuthPasswordLanding from 'src/pages/Auth/AuthPasswordLanding/AuthPasswordLanding.vue';

import User from 'src/pages/User/User.vue';
import UserProfile from 'src/pages/User/Profile/UserProfile.vue';
import UserSetting from 'src/pages/User/Setting/UserSetting.vue';
import UserPassword from 'src/pages/User/Setting/UserPassword/UserPassword.vue';

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
        path: '/signdrop',
        name: 'signdrop',
        components: {
            header: Header,
            content: Signdrop,
            footer: Footer
        }
    }, {
        path: '/auth/grade',
        name: 'auth-grade',
        components: {
            header: Header,
            content: AuthGrade,
            footer: Footer
        }
    }, {
        path: '/auth/grade/landing/:code',
        name: 'auth-grade-landing',
        components: {
            header: Header,
            content: AuthGradeLanding,
            footer: Footer
        },
        props: {
            content: true
        }
    }, {
        path: '/auth/password',
        name: 'auth-password',
        components: {
            header: Header,
            content: AuthPassword,
            footer: Footer
        }
    }, {
        path: '/auth/password/landing/:code',
        name: 'auth-password-landing',
        components: {
            header: Header,
            content: AuthPasswordLanding,
            footer: Footer
        }
    }, {
        path: '/user/:userId',
        components: {
            header: Header,
            content: User,
            footer: Footer
        },
        props: {
            content: true
        },
        children: [{
            path: '',
            name: 'user-profile',
            component: UserProfile,
            props: true
        }, {
            path: 'setting',
            name: 'user-setting',
            component: UserSetting
        }, {
            path: 'setting/password',
            name: 'user-setting-password',
            component: UserPassword
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
