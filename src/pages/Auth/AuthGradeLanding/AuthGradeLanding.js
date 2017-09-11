/*
    @name: AuthGradeLanding.js
    @desc: 회원등급 이메일 인증 랜딩 페이지
    @author: Evan Moon
    @created_at: 2017.09.11
*/
import APIService from 'src/services/API.service';
import axios from 'axios';
export default {
    name: 'AuthGradeLanding',
    data () {
        return {
            result: false
        };
    },
    methods: {
        fetchResult () {
            axios.get('http://192.168.99.100:8080/v1/contents').then(res => {

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
