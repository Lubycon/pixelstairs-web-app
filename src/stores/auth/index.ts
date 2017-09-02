/*
    @name: auth/index.ts
    @desc: Auth스토어 모듈
    @author: Evan Moon
    @created_at: 2017.08.27
*/

import { Module } from 'vuex';
import { AuthState } from './state';
import Actions from './actions';
import Getters from './getters';
import Mutations from './mutations';

export class AuthStoreModule implements Module<AuthState, any> {
    public state: AuthState;
    public getters = Getters;
    public mutations = Mutations;
    public actions = Actions;

    constructor() {
        this.state = new AuthState();
    }
}
