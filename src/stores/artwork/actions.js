/*
    @name: artwork/actions.js
    @desc: Artwork스토어 액션 생성자
    @author: Evan Moon
    @created_at: 2017.09.10
*/

import APIService from 'src/services/API.service';

export function setArtwork (store, id) {
    return APIService.resource('contents.detail', {
        id
    }).get().then(res => {
        store.commit('SET_ARTWORK', res.result);
    });
}

export default {
    setArtwork
};
