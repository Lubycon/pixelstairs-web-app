/*
    @name: user/getters.js
    @desc: User스토어 Getter
    @author: Evan Moon
    @created_at: 2017.09.17
*/

export function getUserData (state) {
    return state.userData;
}

export function getUserContents (state) {
    return state.userContents;
}

export default {
    getUserData,
    getUserContents
};
