/*
    @name: Signin.ts
    @desc: 로그인 페이지 컴포넌트
    @author: Evan Moon
    @created_at: 2017.08.29
    @TODO 로그인 폼 따로 모듈로 분리해서 모달로도 사용할 수 있도록 만들 것
*/

import { Vue, Component, Provide, Watch } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';

import SigninForm from 'src/components/forms/Signin/Signin.form.vue';

import APIService from 'src/services/API.service';

import { LOGOS } from 'src/constants';

interface UserAuthData {
    email: string;
    password: string;
}

@Component({
    name: 'Signin',
    components: {
        SigninForm
    }
})
class Signin extends Vue {
    @State('auth') AuthState
    @Action('setToken') setToken
    @Action('setUser') setUser

    @Provide() logo: string = LOGOS.text;

    postData (authData: UserAuthData): void {

        APIService.resource('members.signin').post(authData)
        .then(res => {
            this.setToken(res.result.token);
            this.setUser();
            this.$router.push({ name: 'home' });
        }, err => {
            console.log(err);
        });
    }
}

export default Signin;
