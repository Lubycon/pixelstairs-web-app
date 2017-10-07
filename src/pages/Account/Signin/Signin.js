/*
    @name: Signin.js
    @desc: 로그인 페이지 컴포넌트
    @author: Evan Moon
    @created_at: 2017.08.29
*/
import { mapActions } from 'vuex';
import { LOGOS } from 'src/constants';
import APIService from 'src/services/API.service';

import SigninForm from 'src/components/forms/Signin.form.vue';

export default {
    name: 'Signin',
    components: {
        SigninForm
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
            APIService.resource('users.signin').post(authData)
            .then(res => {
                this.setToken({
                    accessToken: res.result.access_token,
                    refreshToken: res.result.refresh_token
                });
                this.setUserByAPI()
                .then(res => {
                    this.authResolve();
                });
            }, err => {
                if (err) {
                    this.authReject(err);
                }
                else {
                    this.authReject(null);
                }
            });
        },
        authResolve () {
            if (this.$route.query.redirect) {
                this.$router.push({
                    path: this.$route.query.redirect
                });
            }
            else {
                this.$router.push({ name: 'home' });
            }
            this.isBusy = false;
        },
        authReject (err) {
            console.log(err);
            this.isBusy = false;
        },
        ...mapActions({
            setToken: 'setToken',
            setUserByAPI: 'setUserByAPI'
        })
    }
};
