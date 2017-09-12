/*
    @name: SendMail.form
    @desc: 메일 발송 컴포넌트
    @author: Evan Moon
    @created_at: 2017.09.12
*/
import APIService from 'src/services/API.service';

export default {
    name: 'SendMailForm',
    props: {
        api: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            email: null
        };
    },
    methods: {
        submit () {
            return APIService.resource(this.api).post({
                email: this.email
            }).then(res => {
                this.$emit('submit', res);
            });
        }
    }
};
