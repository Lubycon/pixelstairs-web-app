/*
    @name: artwork/mutations.js
    @desc: Artwork스토어 변이 모듈
    @author: Evan Moon
    @created_at: 2017.09.10
*/

export function SET_ARTWORK_DETAIL_VIEW (state, artwork) {
    state.artworkDetailView = artwork;
}

export function CLEAR_ARTWORK_DETAIL_VIEW (state) {
    state.artworkDetailView = null;
}

export function SET_ARTWORK_LIST (state, artworks) {
    state.artworkList = artworks;
}

export function CLEAR_ARTWORK_LIST (state) {
    state.artworkList = [];
}

export function SET_ARTWORK_LIKE (state, bool) {
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

export default {
    SET_ARTWORK_DETAIL_VIEW,
    CLEAR_ARTWORK_DETAIL_VIEW,
    SET_ARTWORK_LIST,
    CLEAR_ARTWORK_LIST,
    SET_ARTWORK_LIKE
};
