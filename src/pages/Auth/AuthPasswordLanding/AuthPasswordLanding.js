/*
    @name: AuthPasswordLanding
    @desc: 패스워드 토큰 랜딩 페이지
    @author: Evan Moon
    @created_at: 2017.09.12
*/

import { AuthCodeMixin } from 'src/mixins/auth-code.mixin';

export default {
    name: 'AuthPasswordLanding',
    mixins: [ AuthCodeMixin ],
    created () {
        this.fetchResult('certs.password.code', this.$route.params.code)
        .then(res => {
            console.log(res);
        }, err => {
            if (err) {
                console.log(err);
            }
        });
    }
};
