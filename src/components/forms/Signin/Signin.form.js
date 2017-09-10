/*
    @name: Signin.form.ts
    @desc: 로그인 폼 컴포넌트
    @author: Evan Moon
    @created_at: 2017.09.03
*/
export default {
    name: 'Signin-form',
    data () {
        return {
            email: null,
            password: null
        };
    },
    methods: {
        callbackSubmit () {
            this.$emit('submit', {
                email: this.email,
                password: this.password
            });
        }
    }
};
