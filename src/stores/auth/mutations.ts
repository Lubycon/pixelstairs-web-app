import { Mutation, MutationTree } from 'vuex';
import { AuthState } from './state';
import { UserSimple } from 'src/interfaces/User.interface';
import APIService from 'src/services/API.service';

export function SET_TOKEN (state: AuthState, token: string) {
    state.token = token;
    APIService.authToken = token;
}

export function SET_USER (state: AuthState, user: UserSimple) {
    state.user = user;
    state.isAuthenticated = true;
}

export default <MutationTree<AuthState>> {
    SET_TOKEN,
    SET_USER
}
