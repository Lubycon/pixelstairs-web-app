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
