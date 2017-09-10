/*
    @name: artwork/index.js
    @desc: Artwork스토어 모듈
    @author: Evan Moon
    @created_at: 2017.09.10
*/

import { ArtworkState } from './state';
import Actions from './actions';
import Getters from './getters';
import Mutations from './mutations';

export const ArtworkStoreModule = {
    state: ArtworkState,
    actions: Actions,
    getters: Getters,
    mutations: Mutations
};
