/*
    @name: auth/state.ts
    @desc: Auth스토어 상태 선언
    @author: Evan Moon
    @created_at: 2017.08.27
*/

import { UserSimple } from '../../interfaces/User.interface';
import { DEFAULT_USER_PROFILE } from 'src/constants';

export class AuthState {
    public user: UserSimple;
    public userProfileSrc: string;
    public token: string;
    public isAuthorized: boolean;

    constructor() {
        this.user = {
            id: null,
            email: null,
            nickname: null,
            status: null,
            profileImg: null
        };
        this.userProfileSrc = DEFAULT_USER_PROFILE;
        this.token = null;
        this.isAuthorized = false;
    }
}
