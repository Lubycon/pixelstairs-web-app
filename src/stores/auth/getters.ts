import { State } from './state';

export class Getters {
    getToken (state: State) {
        return state.token;
    }
}
