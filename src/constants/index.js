// DEV HOST
const S3_HOST = 'https://s3.ap-northeast-2.amazonaws.com/pixelstairs/';
const LOGO_HOST = `${S3_HOST}assets/logo/`;

export const LOGOS = {
    vp: `${LOGO_HOST}vp.svg`,
    text: `${LOGO_HOST}text.svg`
};

export const DEFAULT_USER_PROFILE = `${S3_HOST}user/default_profile_image.png`;

export const CUSTOM_HEADER_PREFIX = 'X-pixel-';
