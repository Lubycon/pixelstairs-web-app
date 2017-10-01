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
        if (typeof permission === 'undefined') {
            permission = 'any';
        }
        return true;
    }

    set router (router) {
        router.beforeResolve((to, from, next) => {
            const redirect = to.meta.redirect || '/';
            if (typeof to.meta.permission === 'undefined') {
                return next(redirect);
            }
            else {
                if (this.check(to.meta.permission)) {
                    next();
                }
                else {
                    return next(redirect);
                }
            }
        });
    }

    get router () {
        return this.router;
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
