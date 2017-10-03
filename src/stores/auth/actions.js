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
    return APIService.resource('users.me').get()
    .then(res => {
        let user = res.result;
        store.commit('SET_USER', user);
    }, err => {
        if (err) {
            // @TODO
            // TOKEN EXPIRED 처리 로직
            // Refresh Token 관련 로직은 여기에 들어간다
            // 2017.09.30 - Evan
            if (err.status === 419) {
                console.log(err.status);
                // destroyToken(store).then(res => {
                //     location.reload();
                // });
            }
        }
    });
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

export default {
    setToken,
    setUserByAPI,
    setUser,
    destroyToken
};
