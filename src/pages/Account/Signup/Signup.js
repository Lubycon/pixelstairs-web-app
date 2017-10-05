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
            logo: LOGOS.vp
        };
    },
    methods: {
        postData (authData) {
            APIService.resource('users.signup').post(authData)
            .then(res => {
                this.setToken(res.result.token);
                this.setUserByAPI();
                this.$router.push({ name: 'auth-grade' });
            }, err => {
                if (err) {
                    this.$swal(`[Error - ${err.status}_${err.data.status.code}] ${err.data.status.msg}`);
                }
                else {
                    this.$swal(`[Error - ${err.status}] Unknown Error`);
                }
            });
        },
        ...mapActions({
            setToken: 'setToken',
            setUserByAPI: 'setUserByAPI'
        })
    }
};
