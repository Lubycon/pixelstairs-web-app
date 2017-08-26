import { Mutation, MutationTree } from 'vuex';
import { AuthState } from './state';

export function SET_TOKEN (state: AuthState, token: string) {
    state.token = token;
}

export default <MutationTree<AuthState>> {
    SET_TOKEN
}