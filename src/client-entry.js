/*
    @name: client-entry.js
    @desc: 클라이언트 사이드 렌더링 초기화 파일
    @author: Evan Moon
    @created_at: 2017.08.21
*/

/* Main application bootstrapper */
import Q from 'q';
import { createApp } from './app';

/* Global jQuery lib with expose-loader */
import 'expose-loader?$!expose-loader?jQuery!jquery';

/* LocalStorage module */
import LocalStorageService from 'src/services/LocalStorage.service';

const { app, router, store } = createApp();

if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
}

/*
    Read LocalStorage and Commit to Store
*/
function readLocalStorage () {
    let defer = Q.defer();

    if (window.localStorage) {
        let token = LocalStorageService.get('auth');
        if (token) {
            store.dispatch('setToken', token).then(res => {
                store.dispatch('setUserByAPI').then(res => {
                    defer.resolve();
                });
            });
        }
        else {
            defer.resolve();
        }
    }
    else {
        defer.resolve();
    }

    return defer.promise;
}

readLocalStorage();

router.onReady(() => {
    // asyncData를 위한 route 훅.
    // asyncData가 존재할 경우 이 호출이 완료된 후 route가 이동된다.，
    // 이전 라우트에서 가져온 중복 데이터는 다시 가져오지 않는다.
    router.beforeResolve((to, from, next) => {
        const matched = router.getMatchedComponents(to);
        const prevMatched = router.getMatchedComponents(from);
        let diffed = false;
        const activated = matched.filter((c, i) => {
            return diffed || (diffed = (prevMatched[i] !== c));
        });
        if (!activated.length) {
            return next();
        }
        Promise.all(activated.map(c => {
            if (c.asyncData) {
                return c.asyncData({ store, route: to });
            }
        })).then(() => {
            /* LOADING INDICATOR */
            next();
        }).catch(next);
    });
    app.$mount('#app');
});
