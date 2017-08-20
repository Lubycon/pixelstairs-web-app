interface User {
    id: number;
    name: string;
    profileImg: string;
}

export class State {
    user: User;
    token: string;
    isAuthenticated: boolean;
}
