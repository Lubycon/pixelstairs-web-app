/*
    @name: Error.js
    @desc: 픽셀스테어스 에러 페이지
    @author: Evan Moon
    @created_at: 2017.09.16
*/

export default {
    name: 'ErrorView',
    props: {
        code: {
            type: String,
            default: '500'
        }
    }
};
