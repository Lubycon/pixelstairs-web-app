import { UserSimple } from '../../interfaces/User.interface';

export class AuthState {
    public user: UserSimple;
    public token: string;
    public isAuthenticated: boolean;

    constructor() {
        this.user = {
            id: null,
            email: null,
            nickname: null,
            status: null,
            profileImg: null
        };
        this.token = null;
        this.isAuthenticated = false;
    }
}
