/*
    @name: artwork/mutations.js
    @desc: Artwork스토어 변이 모듈
    @author: Evan Moon
    @created_at: 2017.09.10
*/

export function SET_ARTWORK_DETAIL_VIEW (state, artwork) {
    state.artworkDetailView = artwork;
}

export function SET_ARTWORK_LIST (state, artworks) {
    state.artworkList = artworks;
}

export default {
    SET_ARTWORK_DETAIL_VIEW,
    SET_ARTWORK_LIST
};
