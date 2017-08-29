import { Getter, GetterTree } from 'vuex';
import { AuthState } from './state';
import { UserSimple } from 'src/interfaces/User.interface';

export function getToken (state: AuthState): string {
    return state.token;
}

export function isAuthenticated (state: AuthState): boolean {
    return state.isAuthenticated;
}

export function getUser (state: AuthState): UserSimple {
    return state.isAuthenticated && state.user;
}

export default <GetterTree<AuthState, any>> {
    getToken
}
