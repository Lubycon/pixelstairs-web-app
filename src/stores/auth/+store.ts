import { Store } from 'vuex';
import { State } from './state';
import { Actions } from './actions';
import { Getters } from './getters';
import { Mutations } from './mutations';

interface AuthStore = {
    state: State;
    actions: Actions;
    getters: Getters;
    mutations: Mutations;
};

export default new Store<AuthStore>();
