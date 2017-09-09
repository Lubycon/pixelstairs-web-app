/*
    @name: auth/getters.ts
    @desc: Auth스토어 Getter
    @author: Evan Moon
    @created_at: 2017.08.27
*/

import { Getter, GetterTree } from 'vuex';
import { AuthState } from './state';
import { UserSimple } from 'src/interfaces/User.interface';

export function getToken (state: AuthState): string {
    return state.token;
}

export function isAuthorized (state: AuthState): boolean {
    return state.isAuthorized;
}

export function getUser (state: AuthState): UserSimple {
    return state.isAuthorized && state.user;
}

export function getUserProfileSrc (state: AuthState): string {
    return state.userProfileSrc;
}

export function hasProfileSrc (state: AuthState): boolean {
    return state.hasProfileSrc;
}

export default <GetterTree<AuthState, any>> {
    getToken,
    getUser,
    getUserProfileSrc,
    isAuthorized,
    hasProfileSrc
}
