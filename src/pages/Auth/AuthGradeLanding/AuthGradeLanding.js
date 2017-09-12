/*
    @name: AuthGradeLanding.js
    @desc: 회원등급 이메일 인증 랜딩 페이지
    @author: Evan Moon
    @created_at: 2017.09.11
*/
import { AuthCodeMixin } from 'src/mixins/auth-code.mixin';

export default {
    name: 'AuthGradeLanding',
    mixins: [ AuthCodeMixin ],
    created () {
        this.fetchResult('certs.signup.code', this.$route.params.code)
        .then(res => {
            console.log(res);
        }, err => {
            if (err) {
                console.log(err);
            }
        });
    }
};
