/*
    @name: user/index.js
    @desc: User스토어 모듈
    @author: Evan Moon
    @created_at: 2017.09.17
*/

import { UserState } from './state';
import Actions from './actions';
import Getters from './getters';
import Mutations from './mutations';

export const UserStoreModule = {
    state: UserState,
    actions: Actions,
    getters: Getters,
    mutations: Mutations
};
