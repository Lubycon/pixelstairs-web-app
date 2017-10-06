/*
    @name: Signup.js
    @desc: 회원가입 페이지 컴포넌트
    @author: Evan Moon
    @created_at: 2017.09.02
*/

import { mapActions } from 'vuex';
import APIService from 'src/services/API.service';
import SignupForm from 'src/components/forms/Signup.form.vue';
import { LOGOS } from 'src/constants';

export default {
    name: 'SignUp',
    components: {
        SignupForm
    },
    data () {
        return {
            logo: LOGOS.vp,
            isBusy: false
        };
    },
    methods: {
        postData (authData) {
            this.isBusy = true;
            APIService.resource('users.signup').post(authData)
            .then(res => {
                this.setToken(res.result.token);
                this.setUserByAPI().then(res => {
                    this.$router.push({ name: 'auth-grade' });
                    this.isBusy = false;
                });
            }, err => {
                console.log(err);
                this.isBusy = false;
            });
        },
        ...mapActions({
            setToken: 'setToken',
            setUserByAPI: 'setUserByAPI'
        })
    }
};
