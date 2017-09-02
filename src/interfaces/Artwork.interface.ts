/*
    @name: Artwork.interface.ts
    @desc: 픽셀스테어스 아트워크 데이터 규격 인터페이스
    @author: Evan Moon
    @created_at: 2017.08.31
*/

import { UserDetail } from 'src/interfaces/User.interface';
import { Image } from 'src/interfaces/Image.interface';

interface Counts {
    like: number;
    view: number;
}

export interface Artwork {
    id: string;
    title: string;
    image: Image;
    user: UserDetail;
    hashTags: string[];
    description: string;
    counts: Counts;
    licenseCode: string;
    myLike: boolean;
    createdAt: string;
    updatedAt: string;
}
