/*
    @name: UserPassword.js
    @desc: 유저 비밀번호 변경 페이지
    @author: Evan Moon
    @created_at: 2017.09.12
*/

import APIService from 'src/services/API.service';

export default {
    name: 'ChangePassword',
    data () {
        return {
            isBusy: false,
            password: null
        };
    },
    methods: {
        submit () {
            let data = {
                newPassword: this.password,
                code: this.$route.params.code
            };

            this.isBusy = true;
            return APIService.resource('users.pwd.reset')
            .put(data).then(res => {
                this.$swal('Your password has been changed successfully!')
                .then(res => {
                    this.$router.push({ name: 'home' });
                });
                this.isBusy = false;
            }, err => {
                if (err) {}
                this.isBusy = false;
                this.$swal({
                    title: `[Err] ${err.data.status.code}`,
                    text: `${err.data.status.msg}`
                });
            });
        }
    }
};
