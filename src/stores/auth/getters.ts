import { Getter, GetterTree } from 'vuex';
import { AuthState } from './state';

export function getToken (state: AuthState) {
    return state.token;
}

export default <GetterTree<AuthState, any>> {
    getToken
}
