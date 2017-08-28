import Vue from 'vue';
import Component from 'vue-class-component';

import APIService from 'src/services/API.service';

interface UserAuthData {
    email: string;
    password: string;
}

@Component({
    name: 'Signin',
})
class Signin extends Vue {
    title: string = 'This is Signin page';
    form: UserAuthData = {
        email: null,
        password: null
    };

    get emailState (): string {
        return this.form.email ? null : 'invalid';
    }

    Signin (): void {
        const DATA: UserAuthData = {
            email: this.form.email,
            password: this.form.password
        };
        console.log(APIService);
        // APIService._axios.post('/members/signin', DATA)
        // .then(res => {
        //     console.log(res);
        // });
    }
}

export default Signin;
