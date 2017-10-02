/*
    @name: Permission.plugin.js
    @desc: 픽셀스테어스 퍼미션 관리 플러그인
    @author: Evan Moon
    @created_at: 2017.10.01
*/

class Permission {

    init (router, store, permissions) {
        this.router = router;
        this.store = store;
        this.permissions = Array.isArray(permissions) ? permissions : [permissions];
    }

    check (permission) {
        const state = this.getAuthState();
        const IS_AUTHORIZED = state.isAuthorized;
        const USER_STATUS = state.user ? state.user.status : null;

        if (typeof permission === 'undefined') {
            permission = 'any';
        }

        if (permission === 'any') {
            return true;
        }

        const PERMISSIONS = (permission.indexOf('|') !== -1) ? permission.split('|') : [permission];
        let output = PERMISSIONS.map(pms => {
            const condition = this.permissions.find(v => v.name === pms);

            const authCheck = condition.authorized === IS_AUTHORIZED;
            const needSignin = condition.authorized && condition.authorized !== IS_AUTHORIZED;
            const statusCheck = condition.status === null || condition.status === USER_STATUS;

            return {
                result: authCheck && statusCheck,
                authCheck,
                needSignin,
                statusCheck
            };
        });

        return {
            result: output.some(v => v.result),
            authCheck: output.every(v => v.authCheck),
            needSignin: output.every(v => v.needSignin),
            statusCheck: output.every(v => v.statusCheck)
        };
    }

    set router (router) {
        router.beforeResolve((to, from, next) => {
            let redirect = to.meta.redirect || '/';

            if (typeof to.meta.permission === 'undefined') {
                return next(redirect);
            }
            else {
                const CHECK = this.check(to.meta.permission);
                if (typeof CHECK !== 'object') {
                    return next();
                }

                if (CHECK.result) {
                    return next();
                }
                else {
                    console.log(CHECK);
                    if (!CHECK.authCheck && CHECK.needSignin) {
                        return next({
                            name: 'signin',
                            query: {
                                redirect: to.fullPath
                            }
                        });
                    }
                    else {
                        return next(redirect);
                    }
                }
            }
        });
    }

    get router () {
        return this.router;
    }

    getAuthState () {
        if (process.browser) {
            return window.__INITIAL_STATE__.auth;
        }
        else {
            return this.store.state.auth;
        }
    }
}

let instance = new Permission();

Permission.install = function (Vue, { router, store, permissions }) {
    instance.init(router, store, permissions);

    Vue.prototype.$permission = function (permission) {
        return instance.check(permission);
    };
};

export default Permission;
