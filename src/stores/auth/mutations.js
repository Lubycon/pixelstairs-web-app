/*
    @name: auth/mutations.js
    @desc: Auth스토어 변이 모듈
    @author: Evan Moon
    @created_at: 2017.08.27
*/

import APIService from 'src/services/API.service';
import CookieService from 'src/services/Cookie.service';

export function SET_TOKEN (state, token) {
    state.token = token;
    APIService.authToken = token;
    CookieService.save({
        key: 'auth',
        value: token
    });
}

export function SET_USER (state, user) {
    state.user = user;
    state.isAuthorized = true;
    CookieService.save({
        key: 'user',
        value: user
    });

    if (user.profileImg) {
        state.userProfileSrc = user.profileImg.file + '320';
        state.hasProfileSrc = true;
    }
}

export function DESTROY_TOKEN (state) {
    state.token = null;
    state.user = {
        id: null,
        email: null,
        nickname: null,
        status: null,
        profileImg: null
    };
    state.isAuthorized = false;
    APIService.destroyToken();
    CookieService.clear('auth');
    CookieService.clear('user');

    location.reload('/');
}

export default {
    SET_TOKEN,
    SET_USER,
    DESTROY_TOKEN
};
