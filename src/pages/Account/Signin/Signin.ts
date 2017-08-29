import Vue from 'vue';
import Component from 'vue-class-component';
import {
    State,
    Action,
} from 'vuex-class';

import APIService from 'src/services/API.service';

interface UserAuthData {
    email: string;
    password: string;
}

@Component({
    name: 'Signin'
})
class Signin extends Vue {
    @State('auth') AuthState
    @Action('setToken') setToken
    @Action('setUser') setUser

    title: string = 'This is Signin page';
    form: UserAuthData = {
        email: null,
        password: null
    };

    get emailState (): string {
        return this.form.email ? null : 'invalid';
    }

    postData (): void {
        const DATA: UserAuthData = {
            email: this.form.email,
            password: this.form.password
        };

        APIService.resource('members.signin').post(DATA)
        .then(res => {
            this.setToken(res.result.token);
            this.setUser();
        }, err => {
            console.log(err);
        });
    }
}

export default Signin;
