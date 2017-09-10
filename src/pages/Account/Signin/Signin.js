/*
    @name: Signin.ts
    @desc: 로그인 페이지 컴포넌트
    @author: Evan Moon
    @created_at: 2017.08.29
*/
import { mapActions } from 'vuex';
import SigninForm from 'src/components/forms/Signin/Signin.form.vue';
import APIService from 'src/services/API.service';
import { LOGOS } from 'src/constants';

export default {
    name: 'Signin',
    components: {
        SigninForm
    },
    data () {
        return {
            logo: LOGOS.text
        };
    },
    methods: {
        ...mapActions({
            setToken: 'setToken',
            setUserByAPI: 'setUserByAPI'
        }),
        postData (authData) {
            APIService.resource('members.signin').post(authData)
            .then(res => {
                this.setToken(res.result.token);
                this.setUserByAPI();
                this.$router.push({ name: 'home' });
            }, err => {
                console.log(err);
            });
        }
    }
};
