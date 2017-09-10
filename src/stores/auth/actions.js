/*
    @name: auth/actions.js
    @desc: Auth스토어 액션 생성자
    @author: Evan Moon
    @created_at: 2017.08.27
*/

import Q from 'q';
import APIService from 'src/services/API.service';

export function setToken (store, token) {
    let defer = Q.defer();
    store.commit('SET_TOKEN', token);
    defer.resolve();
    return defer.promise;
}

export function setUserByAPI (store) {
    return APIService.resource('members.simple').get()
    .then(res => {
        delete res.result.newsletterAccepted;
        delete res.result.gender;
        delete res.result.birthday;

        let user = res.result;
        store.commit('SET_USER', user);
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
