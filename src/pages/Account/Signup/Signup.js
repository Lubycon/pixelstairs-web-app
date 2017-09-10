/*
    @name: Signup.ts
    @desc: 회원가입 페이지 컴포넌트
    @author: Evan Moon
    @created_at: 2017.09.02
*/

import APIService from 'src/services/API.service';
import SignupForm from 'src/components/forms/Signup/Signup.form.vue';
import { LOGOS } from 'src/constants';

export default {
    name: 'SignUp',
    components: {
        SignupForm
    },
    data () {
        return {
            logo: LOGOS.text
        };
    },
    methods: {
        postData (authData) {
            APIService.resource('members.signup').post(authData)
            .then(res => {
                console.log(res);
            }, err => {
                console.log(err);
            });
        }
    }
};
