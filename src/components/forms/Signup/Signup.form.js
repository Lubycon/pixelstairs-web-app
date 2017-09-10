/*
    @name: Signup.form.ts
    @desc: 회원가입 폼 컴포넌트
    @author: Evan Moon
    @created_at: 2017.09.03
*/

export default {
    name: 'Signup-form',
    data () {
        return {
            email: null,
            password: null,
            name: null,
            newsletter: true
        };
    },
    methods: {
        callbackSubmit () {
            this.$emit('submit', {
                email: this.email,
                password: this.password,
                nickname: this.name,
                newsletterAccepted: this.newsletter,
                termsOfServiceAccepted: true
            });
        }
    }
};
