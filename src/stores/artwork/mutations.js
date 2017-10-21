/*
    @name: artwork/mutations.js
    @desc: Artwork스토어 변이 모듈
    @author: Evan Moon
    @created_at: 2017.09.10
*/

import ARTWORK_STORE from 'src/constants/artwork.store.constant';

const artworkMutations = {
    [ARTWORK_STORE.SET.DETAIL] (state, artwork) {
        state.artworkDetailView = artwork;
    },
    [ARTWORK_STORE.SET.LIST] (state, artworks) {
        state.artworkList = artworks;
    },
    [ARTWORK_STORE.DESTROY.DETAIL] (state) {
        state.artworkDetailView = null;
    },
    [ARTWORK_STORE.DESTROY.LIST] (state) {
        state.artworkList = [];
    },
    [ARTWORK_STORE.SET.LIKE] (state, bool) {
        if (state.artworkDetailView) {
            state.artworkDetailView.myLike = bool;
            if (bool) {
                state.artworkDetailView.counts.like += 1;
            }
            else {
                state.artworkDetailView.counts.like -= 1;
            }
        }
    }
};

export default artworkMutations;
