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
            password: null
        };
    },
    methods: {
        submit () {
            let data = {
                newPassword: this.password,
                code: this.$route.params.code
            };
            
            return APIService.resource('users.pwd.reset')
            .put(data).then(res => {
                console.log(res);
            });
        }
    }
};
