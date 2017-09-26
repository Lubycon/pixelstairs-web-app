/*
    @name: user/mutations.js
    @desc: User스토어 변이 모듈
    @author: Evan Moon
    @created_at: 2017.09.17
*/

export function SET_USER_DATA (state, user) {
    state.userData = user;
}

export function SET_USER_CONTENTS_LIST (state, contents) {
    if (contents) {
        state.userContents = contents;
    }
}

export function CLEAR_USER_DATA (state) {
    state.userData = null;
}

export function CLEAR_USER_CONTENTS_LIST (state) {
    state.userContents = [];
}

export default {
    SET_USER_DATA,
    CLEAR_USER_DATA,
    SET_USER_CONTENTS_LIST,
    CLEAR_USER_CONTENTS_LIST
};
