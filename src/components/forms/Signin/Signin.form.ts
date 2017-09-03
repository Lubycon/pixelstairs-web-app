/*
    @name: Signin.form.ts
    @desc: 로그인 폼 컴포넌트
    @author: Evan Moon
    @created_at: 2017.09.03
*/

import { Vue, Component, Provide } from 'vue-property-decorator';

@Component({
    name: 'Signin-form'
})
class SigninForm extends Vue {
    @Provide() email: string = null;
    @Provide() password: string = null;

    callbackSubmit(): void {
        this.$emit('submit', {
            email: this.email,
            password: this.password
        });
    }
}

export default SigninForm;
