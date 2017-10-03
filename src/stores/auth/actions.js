/*
    @name: auth/actions.js
    @desc: Auth스토어 액션 생성자
    @author: Evan Moon
    @created_at: 2017.08.27
*/

import Q from 'q';
import APIService from 'src/services/API.service';

export function setToken (store, { accessToken, refreshToken }) {
    let defer = Q.defer();
    store.commit('SET_TOKEN', { accessToken, refreshToken });
    defer.resolve();
    return defer.promise;
}

export function setUserByAPI (store) {
    let defer = Q.defer();
    APIService.resource('users.me').get()
    .then(res => {
        let user = res.result;
        store.commit('SET_USER', user);
        defer.resolve();
    }, err => {
        if (err && err.status === 419) {
            // @ERR TOKEN EXPIRED!
            // Access token will be reset using Refresh token
            reissuance(store).then(res => {
                defer.resolve();
            });
        }
    });

    return defer.promise;
}

export function setUser (store, user) {
    let defer = Q.defer();
    store.commit('SET_USER', user);
    defer.resolve();
    return defer.promise;
}

export function destroyToken (store) {
    let defer = Q.defer();
    store.commit('DESTROY_TOKEN');
    defer.resolve();
    return defer.promise;
}

function reissuance (store) {
    let defer = Q.defer();
    APIService.resource('users.refreshToken').get().then(res => {
        setToken(store, {
            accessToken: res.result,
            refreshToken: APIService.refreshToken
        }).then(res => {
            setUserByAPI(store).then(res => {
                defer.resolve();
            });
        });
    }, err => {
        if (err) {
            destroyToken(store).then(res => {
                defer.resolve();
            });
        }
        else {
            destroyToken(store).then(res => {
                defer.resolve();
            });
        }
    });

    return defer.promise;
}

export default {
    setToken,
    setUserByAPI,
    setUser,
    destroyToken
};
