/*
    @name: AuthGradeLanding.js
    @desc: 회원등급 이메일 인증 랜딩 페이지
    @author: Evan Moon
    @created_at: 2017.09.11
*/
import APIService from 'src/services/API.service';

export default {
    name: 'AuthGradeLanding',
    data () {
        return {
            result: false
        };
    },
    methods: {
        fetchResult () {
            APIService.resource('certs.signup.code').post({
                code: this.route.params.code
            }).then(res => {
                this.result = res.result;
            });
        }
    },
    // created () {
    //     this.fetchResult();
    // },
    beforeRouteEnter (to, from, next) {
        // @TODO Promise가 계속 pending되어있음. 안넘어감
        APIService.resource('certs.signup.code').post({
            code: to.params.code
        }).then(res => {
            next((vm) => {
                vm.result = res.data.result;
            });
        });
    }
};
