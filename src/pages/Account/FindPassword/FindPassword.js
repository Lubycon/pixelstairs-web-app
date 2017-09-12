/*
    @name: AuthSendMail
    @desc: 유저가 이메일을 입력하면 인증 메일을 발송하는 페이지
    @author: Evan Moon
    @created_at: 2017.09.12
*/
import SendMailForm from 'src/components/forms/SendMail/SendMail.form.vue';

export default {
    name: 'AuthSendMail',
    components: {
        SendMailForm
    },
    methods: {
        submit (res) {
            console.log(res.result);
        }
    }
};
