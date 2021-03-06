/*
    @name: router/index.js
    @desc: 픽셀스테어스 라우팅 모듈
    @author: Evan Moon
    @created_at: 2017.08.26
*/

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
// import PermissionService from 'src/services/Permission.service';

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
import AuthSendMail from 'src/pages/Account/AuthSendMail/AuthSendMail.vue';

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

import Aboutus from 'src/pages/Aboutus/Aboutus.vue';

import Docs from 'src/pages/Docs/Docs.vue';
import PrivacyPolicy from 'src/pages/Docs/PrivacyPolicy/PrivacyPolicy.vue';
import TermsOfService from 'src/pages/Docs/TermsOfService/TermsOfService.vue';
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
        },
        meta: {
            permission: 'any'
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
        },
        meta: {
            permission: 'any'
        }
    }, {
        path: '/signin',
        name: 'signin',
        components: {
            content: Signin
        },
        meta: {
            permission: 'notUser'
        }
    }, {
        path: '/signup',
        name: 'signup',
        components: {
            content: Signup
        },
        meta: {
            permission: 'notUser'
        }
    }, {
        path: '/signdrop',
        name: 'signdrop',
        components: {
            header: Header,
            content: Signdrop,
            footer: Footer
        },
        meta: {
            permission: 'user:inactive|user:active'
        }
    }, {
        path: '/find-password',
        name: 'find-password',
        components: {
            header: Header,
            content: AuthSendMail,
            footer: Footer
        },
        meta: {
            permission: 'notUser'
        }
    }, {
        path: '/auth/grade',
        name: 'auth-grade',
        components: {
            header: Header,
            content: AuthGrade,
            footer: Footer
        },
        meta: {
            permission: 'user:inactive'
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
        },
        meta: {
            permission: 'any'
        }
    }, {
        path: '/auth/password',
        name: 'auth-password',
        components: {
            header: Header,
            content: AuthPassword,
            footer: Footer
        },
        meta: {
            permission: 'user:inactive|user:active'
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
        },
        meta: {
            permission: 'any'
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
        meta: {
            permission: 'user:inactive|user:active'
        },
        children: [{
            path: '',
            name: 'user-profile',
            component: UserProfile,
            props: true,
            meta: {
                permission: 'user:inactive|user:active'
            }
        }, {
            path: 'setting',
            name: 'user-setting',
            component: UserSetting,
            props: true,
            meta: {
                permission: 'user:inactive|user:active'
            }
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
        },
        meta: {
            permission: 'user:inactive|user:active'
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
        },
        meta: {
            permission: 'any'
        }
    }, {
        path: '/artwork/upload',
        name: 'artwork-upload',
        components: {
            header: Header,
            content: ArtworkUpload
        },
        meta: {
            permission: 'user:inactive|user:active'
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
        },
        meta: {
            permission: 'user:inactive|user:active'
        }
    }, {
        path: '/aboutus',
        name: 'aboutus',
        components: {
            header: Header,
            content: Aboutus,
            footer: Footer
        },
        meta: {
            permission: 'any'
        }
    }, {
        path: '/docs',
        name: 'docs',
        components: {
            header: Header,
            content: Docs,
            footer: Footer
        },
        meta: {
            permission: 'any'
        },
        children: [{
            path: 'privacypolicy',
            name: 'privacy-policy',
            component: PrivacyPolicy,
            meta: {
                permission: 'any'
            }
        }, {
            path: 'termsofservice',
            name: 'terms-of-service',
            component: TermsOfService,
            meta: {
                permission: 'any'
            }
        }]
    }]
});

export default router;
