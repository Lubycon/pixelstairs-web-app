/*
    @name: user/actions.js
    @desc: User스토어 액션 생성자
    @author: Evan Moon
    @created_at: 2017.09.17
*/

import APIService from 'src/services/API.service';

export function setUserDetailView (store, id) {
    return APIService.resource('users.info', {
        id
    }).get().then(res => {
        store.commit('SET_USER_DATA', res.result);

        return APIService.resource('contents.list').get({
            filter: `userId:${id}`
        });
    }).then(res => {
        store.commit('SET_USER_CONTENTS_LIST', res.result);
    });
}

export function clearUserDetailView (store) {
    store.commit('CLEAR_USER_DATA');
    store.commit('CLEAR_USER_CONTENTS_LIST');
}

export default {
    setUserDetailView,
    clearUserDetailView
};
