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
