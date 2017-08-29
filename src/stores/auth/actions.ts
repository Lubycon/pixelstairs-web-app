import { Store, ActionTree, ActionContext } from 'vuex';
import { AuthState } from './state';
import APIService from 'src/services/API.service';

export function setToken(store: ActionContext<AuthState, any>, token:string) {
    store.commit('SET_TOKEN', token);
}

export function setUser(store: ActionContext<AuthState, any>) {
    APIService.resource('members.simple').get()
    .then(res => {
        let user = res.result;

        delete user.newsletterAccepted;
        delete user.gender;
        delete user.birthday;

        store.commit('SET_USER', user);
    });
}

export default <ActionTree<AuthState, any>> {
    setToken,
    setUser
}
