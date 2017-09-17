/*
    @name: artwork/actions.js
    @desc: Artwork스토어 액션 생성자
    @author: Evan Moon
    @created_at: 2017.09.10
*/

import APIService from 'src/services/API.service';

export function setArtworkDetailView (store, id) {
    return APIService.resource('contents.detail', {
        id
    }).get().then(res => {
        store.commit('SET_ARTWORK_DETAIL_VIEW', res.result);
    });
}

export function clearArtworkDetailView (store) {
    store.commit('CLEAR_ARTWORK_DETAIL_VIEW');
}

export function setArtworkList (store, opt) {
    return APIService.resource('contents.list').get(opt).then(res => {
        store.commit('SET_ARTWORK_LIST', res.result);
    });
}

export function clearArtworkList (store) {
    store.commit('CLEAR_ARTWORK_LIST');
}

export default {
    setArtworkDetailView,
    clearArtworkDetailView,
    setArtworkList,
    clearArtworkList
};
