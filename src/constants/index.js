import { S3_BASE_URL } from 'src/constants/env.constant';

const LOGO_HOST = `${S3_BASE_URL}/assets/logo/`;
const ICON_HOST = `${S3_BASE_URL}/assets/icons/`;

export const LOGOS = {
    vp: `${LOGO_HOST}vp.svg`,
    vp_w: `${LOGO_HOST}vp_w.png`,
    text: `${LOGO_HOST}text.svg`
};

export const ABOUT_US_ICONS = {
    paint: `${ICON_HOST}Paint-Art.svg`,
    cg: `${ICON_HOST}Computer-Graphic-Art.svg`,
    photo: `${ICON_HOST}Photograph-Art.svg`
};

export const DEFAULT_USER_PROFILE = `${S3_BASE_URL}/user/default_profile_image.png`;

export const CUSTOM_HEADER_PREFIX = 'X-pixel-';

export const PERMISSIONS = [{
    name: 'user:active',
    status: 'active',
    authorized: true
}, {
    name: 'user:inactive',
    status: 'inactive',
    authorized: true
}, {
    name: 'notUser',
    status: null,
    authorized: false
}];
