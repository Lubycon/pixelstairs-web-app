/*
    @name: AuthPassword
    @desc: 패스워드 인증 페이지
    @author: Evan moon
    @created_at: 2017.09.12
*/
import { mapGetters } from 'vuex';
import APIService from 'src/services/API.service';

export default {
    name: 'AuthPassword',
    data () {
        return {
            password: null
        };
    },
    computed: {
        ...mapGetters({
            user: 'getUser'
        })
    },
    methods: {
        submit () {
            let data = {
                email: this.user.email,
                password: this.password
            };

            this.checkPassword(data).then(res => {
                if (res.result.validity) {
                    this.createToken();
                }
                else {
                    this.rejectHandler('This is wrong password::DEBUG');
                }
            }, err => {
                if (err) {
                    this.rejectHandler('This is wrong password err::DEBUG');
                }
            });
        },
        checkPassword (data) {
            return APIService.resource('certs.password.check').post(data);
        },
        createToken () {
            return APIService.resource('users.pwd.token').post()
            .then(res => {
                this.$router.push({
                    name: 'user-setting-password',
                    params: {
                        code: res.result.token
                    }
                });
            }, err => {
                if (err) {
                    this.rejectHandler('Token generating has been failed::DEBUG');
                }
            });
        },
        rejectHandler (msg) {
            alert(msg);
        }
    }
};
