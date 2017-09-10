/*
    @name: artwork/getters.js
    @desc: Artwork스토어 Getter
    @author: Evan Moon
    @created_at: 2017.09.10
*/

export function getArtworkDetailView (state) {
    return state.artworkDetailView;
}

export function getArtworkList (state) {
    return state.artworkList;
}

export default {
    getArtworkDetailView,
    getArtworkList
};
