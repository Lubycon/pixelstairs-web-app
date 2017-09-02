/*
    @name: auth/mutations.ts
    @desc: Auth스토어 변이 모듈
    @author: Evan Moon
    @created_at: 2017.08.27
*/

import { Mutation, MutationTree } from 'vuex';
import { AuthState } from './state';
import { UserSimple } from 'src/interfaces/User.interface';

import APIService from 'src/services/API.service';
import LocalStorageService from 'src/services/LocalStorage.service';

export function SET_TOKEN (state: AuthState, token: string) {
    state.token = token;
    APIService.authToken = token;
    LocalStorageService.save({
        key: 'auth',
        value: token
    });
}

export function SET_USER (state: AuthState, user: UserSimple) {
    state.user = user;
    state.isAuthenticated = true;
    LocalStorageService.save({
        key: 'user',
        value: user
    });
}

export default <MutationTree<AuthState>> {
    SET_TOKEN,
    SET_USER
}
