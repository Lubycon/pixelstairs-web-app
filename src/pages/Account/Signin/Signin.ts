/*
    @name: Signin.ts
    @desc: 로그인 페이지 컴포넌트
    @author: Evan Moon
    @created_at: 2017.08.29
    @TODO 로그인 폼 따로 모듈로 분리해서 모달로도 사용할 수 있도록 만들 것
*/

import { Vue, Component, Provide, Watch } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';

import APIService from 'src/services/API.service';

import { LOGOS } from 'src/constants';

interface UserAuthData {
    email: string;
    password: string;
}

@Component({
    name: 'Signin'
})
class Signin extends Vue {
    @State('auth') AuthState
    @Action('setToken') setToken
    @Action('setUser') setUser

    @Provide() logo: string = LOGOS.text;

    form: UserAuthData = {
        email: null,
        password: null
    };

    get emailState (): string {
        return this.form.email ? null : 'invalid';
    }

    postData (): void {
        const DATA: UserAuthData = {
            email: this.form.email,
            password: this.form.password
        };

        APIService.resource('members.signin').post(DATA)
        .then(res => {
            this.setToken(res.result.token);
            this.setUser();
        }, err => {
            console.log(err);
        });
    }
}

export default Signin;
