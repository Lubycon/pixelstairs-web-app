/*
    @name: artwork.store.constant.js
    @desc: artwork store 상수값 설정
    @author: Martin Kim
    @created_at: 2017.10.08
*/

export default {
    GET: {
        LIST: 'ARTWORK/GET_ARTWORK_LIST',
        DETAIL: 'ARTWORK/GET_ARTWORK_DETAIL_VIEW'
    },
    SET: {
        LIST: 'ARTWORK/SET_ARTWORK_LIST',
        DETAIL: 'ARTWORK/SET_ARTWORK_DETAIL_VIEW',
        LIKE: 'ARTWORK/SET_ARTWORK_LIKE'
    },
    DESTROY: {
        LIST: 'ARTWORK/DESTROY_ARTWORK_LIST',
        DETAIL: 'ARTWORK/DESTROY_ARTWORK_DETAIL_VIEW'
    }
};
