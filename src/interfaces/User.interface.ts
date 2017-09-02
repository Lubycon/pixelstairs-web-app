/*
    @name: User.interface.ts
    @desc: 픽셀스테어스 유저 데이터 규격 인터페이스
    @author: Evan Moon
    @created_at: 2017.08.27
*/

import { Image } from './Image.interface';

export interface UserSimple {
    id: string;
    email: string;
    nickname: string;
    status: string;
    profileImg: Image;
}

export interface UserDetail {
    id: string;
    email: string;
    nickname: string;
    status: string;
    profileImg: Image;
    newsletterAccepted: number;
    birthday: string;
    gender: string;
}
