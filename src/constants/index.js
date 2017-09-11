import { S3_BASE_URL } from 'src/constants/env.constant';

const LOGO_HOST = `${S3_BASE_URL}/assets/logo/`;

export const LOGOS = {
    vp: `${LOGO_HOST}vp.svg`,
    text: `${LOGO_HOST}text.svg`
};

export const DEFAULT_USER_PROFILE = `${S3_BASE_URL}/user/default_profile_image.png`;

export const CUSTOM_HEADER_PREFIX = 'X-pixel-';
