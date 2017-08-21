interface User {
    id: number;
    name: string;
    profileImg: string;
}

export class AuthState {
    public user: User;
    public token: string;
    public isAuthenticated: boolean;

    constructor() {
        this.user = {
            id: -1,
            name: '',
            profileImg: ''
        };
        this.token = '';
        this.isAuthenticated = false;
    }
}
