import { Mutation, MutationTree } from 'vuex';
import { AuthState } from './state';
import { UserSimple } from 'src/interfaces/User.interface';

import APIService from 'src/services/API.service';
import LocalStorageService from 'src/services/LocalStorage.service';

export function SET_TOKEN (state: AuthState, token: string) {
    state.token = token;
    APIService.authToken = token;
    LocalStorageService.save({
        key: 'auth',
        value: token,
        options: {
            expires: 1
        }
    });

    console.log(LocalStorageService.get('auth'));
}

export function SET_USER (state: AuthState, user: UserSimple) {
    state.user = user;
    state.isAuthenticated = true;
    LocalStorageService.save({
        key: 'user',
        value: user,
        options: {
            expires: 1
        }
    });

    console.log(LocalStorageService.get('user'));
}

export default <MutationTree<AuthState>> {
    SET_TOKEN,
    SET_USER
}
