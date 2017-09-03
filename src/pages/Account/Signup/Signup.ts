/*
    @name: Signup.ts
    @desc: 회원가입 페이지 컴포넌트
    @author: Evan Moon
    @created_at: 2017.09.02
    @TODO 회원가입 폼 따로 모듈로 분리해서 모달로도 사용할 수 있도록 만들 것
*/

import { Vue, Component, Provide, Prop } from 'vue-property-decorator';

import APIService from 'src/services/API.service';

import SignupForm from 'src/components/forms/Signup/Signup.form.vue';

import { LOGOS } from 'src/constants';

interface UserAuthData {
    email: string;
    password: string;
    nickname: string;
    newsletterAccepted: boolean;
    termsOfServiceAccepted: boolean;
}

@Component({
    name: 'Signup',
    components: {
        SignupForm
    }
})
class Signup extends Vue {
    @Provide() logo: string = LOGOS.text;

    postData (authData: UserAuthData): void {
        APIService.resource('members.signup').post(authData)
        .then(res => {
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
}
export default Signup;
