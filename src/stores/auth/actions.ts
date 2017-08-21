import { Store, ActionTree, ActionContext } from 'vuex';
import { AuthState } from './state';

export function setToken(store: ActionContext<AuthState, any>, token:string) {
    store.commit('SET_TOKEN', token);
}

export default <ActionTree<AuthState, any>> {
    setToken
}
