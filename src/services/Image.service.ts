/*
    @name: Image.service.ts
    @desc: 픽셀스테어스 이미지 관리 서비스
    @author: Evan Moon
    @created_at: 2017.09.03
*/

import { Image } from 'src/interfaces/Image.interface';
import { DEFAULT_USER_PROFILE } from 'src/constants';

class ImageService {
    private defaultUserProfile: string;
    constructor(DEFAULT_USER_PROFILE: string) {
        this.defaultUserProfile = DEFAULT_USER_PROFILE;
    }

    getResolution(img: Image, resolution: number = 1920): string {
        if(!img) return null;

        if(!!img.isPixelOwn) {
            return img.file + resolution;
        }
        else {
            return img.file;
        }
    }

    getUserProfile(img: Image, resolution: number = 320): string {
        if(!img) {
            return this.defaultUserProfile;
        }
        else {
            return this.getResolution(img, resolution);
        }
    }
}

const instance = new ImageService(DEFAULT_USER_PROFILE);
export default instance;
