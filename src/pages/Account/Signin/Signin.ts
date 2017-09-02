import { Vue, Component, Provide, Watch } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';

import APIService from 'src/services/API.service';

import { LOGOS } from 'src/constants';

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

    @Provide() logo: string = LOGOS.text;

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
