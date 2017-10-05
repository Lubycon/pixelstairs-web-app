/*
    @name: is-exist-user.mixin.js
    @desc: 해당하는 값이 현재 존재하는 유저인지 비동기 통신으로 판별하는 폼 믹스인
    @author: Evan Moon
    @created_at: 2017.10.05
*/
import Q from 'q';
import APIService from 'src/services/API.service';

export const isExistUserMixin = {
    data () {
        return {
            isExist: {
                email: false,
                name: false
            }
        };
    },
    methods: {
        isExistEmail (value) {
            let defer = Q.defer();
            if (!this.email) {
                return;
            }
            APIService.resource('users.exists.email').post({ email: this.email })
            .then(res => {
                defer.resolve(res.result);
            }, err => {
                if (err) {
                    defer.resolve(false);
                }
            });

            return defer.promise;
        },
        isExistName (value) {
            let defer = Q.defer();
            if (!this.name) {
                return;
            }
            APIService.resource('users.exists.name').post({ nickname: this.name })
            .then(res => {
                defer.resolve(res.result);
            }, err => {
                if (err) {
                    defer.resolve(false);
                }
            });

            return defer.promise;
        }
    },
    created () {
        this.$validator.extend('existEmail', {
            getMessage: field => `Your ${field} has already exist`,
            validate: value => {
                return this.isExistEmail(value).then(res => {
                    return {
                        valid: res
                    };
                });
            }
        });
        this.$validator.extend('existName', {
            getMessage: field => `Your ${field} has already exist`,
            validate: value => {
                return this.isExistName(value).then(res => {
                    return {
                        valid: res
                    };
                });
            }
        });
    }
};
