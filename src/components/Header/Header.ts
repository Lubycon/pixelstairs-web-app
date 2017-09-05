/*
    @name: Header.ts
    @desc: 글로벌 헤더 컴포넌트
    @author: Evan Moon
    @created_at: 2017.08.26
*/

import { Vue, Component, Provide, Watch } from 'vue-property-decorator';
import { State, Getter } from 'vuex-class';

import { LOGOS } from 'src/constants';

import UserMenu from 'src/components/menus/UserMenu/UserMenu.vue';

@Component({
    name: 'GlobalHeader',
    components: {
        UserMenu
    }
})
class Header extends Vue {
    @State('auth') AuthState
    @Getter('isAuthorized') isAuthorized

    public logoSrc: string = LOGOS.text;
}

export default Header;
