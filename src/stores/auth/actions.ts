/*
    @name: auth/actions.ts
    @desc: Auth스토어 액션 생성자
    @author: Evan Moon
    @created_at: 2017.08.27
*/

import { Store, ActionTree, ActionContext } from 'vuex';
import { AuthState } from './state';
import Q from 'q';
import { UserSimple } from 'src/interfaces/user.interface';

import ImageService from 'src/services/Image.service';
import APIService from 'src/services/API.service';

export function setToken(store: ActionContext<AuthState, any>, token:string) {
    let defer = Q.defer();
    store.commit('SET_TOKEN', token);
    defer.resolve();
    return defer.promise;
}

export function setUserByAPI(store: ActionContext<AuthState, any>) {
    return APIService.resource('members.simple').get()
    .then(res => {
        delete res.result.newsletterAccepted;
        delete res.result.gender;
        delete res.result.birthday;

        let user: UserSimple = res.result;
        store.commit('SET_USER', user);
    });
}

export function setUser(store: ActionContext<AuthState, any>, user: UserSimple) {
    let defer = Q.defer();
    store.commit('SET_USER', user);
    defer.resolve();
    return defer.promise;
}

export function destroyToken(store: ActionContext<AuthState, any>) {
    let defer = Q.defer();
    store.commit('DESTROY_TOKEN');
    defer.resolve();
    return defer.promise;
}

export default <ActionTree<AuthState, any>> {
    setToken,
    setUserByAPI,
    setUser,
    destroyToken
}
