import { Vue, Component, Provide, Prop } from 'vue-property-decorator';

import APIService from 'src/services/API.service';

import { LOGOS } from 'src/constants';

interface UserAuthData {
    email: string;
    password: string;
}

@Component({
    name: 'Signup'
})
class Signup extends Vue {
    @Provide() logo: string = LOGOS.text;

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
            // this.setToken(res.result.token);
            // this.setUser();
        }, err => {
            console.log(err);
        });
    }
}
export default Signup;
