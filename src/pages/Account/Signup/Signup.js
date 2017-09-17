/*
    @name: Signup.ts
    @desc: 회원가입 페이지 컴포넌트
    @author: Evan Moon
    @created_at: 2017.09.02
*/

import { mapActions } from 'vuex';
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
            APIService.resource('users.signup').post(authData)
            .then(res => {
                this.setToken(res.result.token);
                this.setUserByAPI();
                this.router.push({ name: 'auth-grade' });
            }, err => {
                console.log(err);
            });
        },
        ...mapActions({
            setToken: 'setToken',
            setUserByAPI: 'setUserByAPI'
        })
    }
};
