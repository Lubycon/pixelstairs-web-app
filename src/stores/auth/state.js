/*
    @name: auth/state.ts
    @desc: Auth스토어 상태 선언
    @author: Evan Moon
    @created_at: 2017.08.27
*/

import { DEFAULT_USER_PROFILE } from 'src/constants';

export const AuthState = {
    user: {
        id: null,
        email: null,
        nickname: null,
        status: null,
        profileImg: null
    },
    userProfileSrc: DEFAULT_USER_PROFILE,
    token: null,
    isAuthorized: false,
    hasProfileSrc: false
};
