/*
    @name: artwork/getters.js
    @desc: Artwork스토어 Getter
    @author: Evan Moon
    @created_at: 2017.09.10
*/
import ARTWORK_STORE from 'src/constants/artwork.store.constant';

const artworkGetters = {
    [ARTWORK_STORE.GET.DETAIL] (state) {
        return state.artworkDetailView;
    },
    [ARTWORK_STORE.GET.LIST] (state) {
        return state.artworkList;
    }
};

export default artworkGetters;
