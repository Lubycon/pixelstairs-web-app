/*
    @name: router/index.js
    @desc: 픽셀스테어스 라우팅 모듈
    @author: Evan Moon
    @created_at: 2017.08.26
*/

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';

/* Global Components */
import Header from 'src/components/Header.vue';
import Footer from 'src/components/Footer.vue';
/* /Global Components */

/* PAGES */
import Home from 'src/pages/Home/Home.vue';
import ErrorView from 'src/pages/ErrorView/ErrorView.vue';

import Signin from 'src/pages/Account/Signin/Signin.vue';
import Signup from 'src/pages/Account/Signup/Signup.vue';
import Signdrop from 'src/pages/Account/Signdrop/Signdrop.vue';
import FindPassword from 'src/pages/Account/FindPassword/FindPassword.vue';

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
import ArtworkUploadSuccess from 'src/pages/Artwork/ArtworkUploadSuccess/ArtworkUploadSuccess.vue';
/* /PAGES */

Vue.use(VueRouter);
Vue.use(VueMeta, {
    attribute: 'data-vue-meta',
    ssrAttribute: 'data-vue-meta-server-rendered'
});

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        else {
            return { x: 0, y: 0 };
        }
    },
    routes: [{
        path: '/',
        name: 'home',
        components: {
            header: Header,
            content: Home,
            footer: Footer
        }
    }, {
        path: '/error/:code',
        name: 'error-view',
        components: {
            header: Header,
            content: ErrorView,
            footer: Footer
        },
        props: {
            content: true
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
        path: '/find-password',
        name: 'find-password',
        components: {
            header: Header,
            content: FindPassword,
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
        },
        props: {
            content: true
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
        }]
    }, {
        path: '/user/setting/password/:code',
        name: 'user-setting-password',
        components: {
            header: Header,
            content: UserPassword,
            footer: Footer
        },
        props: {
            content: true
        }
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
    }, {
        path: '/artwork/upload/success/:artId',
        name: 'artwork-upload-success',
        components: {
            header: Header,
            content: ArtworkUploadSuccess,
            footer: Footer
        },
        props: {
            content: true
        }
    }]
});

export default router;
