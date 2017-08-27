import { UserSimple } from '../../interfaces/User.interface';

export class AuthState {
    public user: UserSimple;
    public token: string;
    public isAuthenticated: boolean;

    constructor() {
        this.user = {
            id: 'unknown',
            email: '',
            nickname: '',
            status: '',
            profileImg: {
                id: '',
                file: '',
                deleted: false,
                index: -1,
                isPixelOwn: -1
            }
        };
        this.token = '';
        this.isAuthenticated = false;
    }
}
