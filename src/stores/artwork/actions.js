/*
    @name: artwork/actions.js
    @desc: Artwork스토어 액션 생성자
    @author: Evan Moon
    @created_at: 2017.09.10
*/

import APIService from 'src/services/API.service';
import ARTWORK_STORE from 'src/constants/artwork.store.constant';

const artworkActions = {
    [ARTWORK_STORE.SET.DETAIL] (store, id) {
        return APIService.resource('contents.detail', {
            id
        }).get().then(res => {
            store.commit(ARTWORK_STORE.SET.DETAIL, res.result);
        });
    },
    [ARTWORK_STORE.DESTROY.DETAIL] (store) {
        store.commit(ARTWORK_STORE.DESTROY.DETAIL);
    },
    [ARTWORK_STORE.SET.LIST] (store, opt) {
        return APIService.resource('contents.list').get(opt).then(res => {
            store.commit(ARTWORK_STORE.SET.LIST, res.result);
        });
    },
    [ARTWORK_STORE.DESTROY.LIST] (store) {
        store.commit(ARTWORK_STORE.DESTROY.LIST);
    },
    [ARTWORK_STORE.SET.LIKE] (store, bool) {
        store.commit(ARTWORK_STORE.SET.LIKE, bool);
    }
};

export default artworkActions;
