/*
    @name: Signup.form.ts
    @desc: 회원가입 폼 컴포넌트
    @author: Evan Moon
    @created_at: 2017.09.03
*/

import { Vue, Component, Provide } from 'vue-property-decorator';

@Component({
    name: 'Signup-form'
})
class SignupForm extends Vue {
    @Provide() email: string = null;
    @Provide() password: string = null;
    @Provide() name: string = null;
    @Provide() newsletter: boolean = true;

    callbackSubmit(): void {
        this.$emit('submit', {
            email: this.email,
            password: this.password,
            nickname: this.name,
            newsletterAccepted: this.newsletter,
            termsOfServiceAccepted: true
        });
    }
}

export default SignupForm;
