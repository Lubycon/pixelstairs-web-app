import { State } from './state';

export type identify = 'user' | 'token';

export class Mutations {
    setToken (state: State, token: string) {
        state.token = token;
    }
}
