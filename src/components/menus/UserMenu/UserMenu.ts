/*
    @name UserMenu.ts
    @desc: 유저 로그인 메뉴 컴포넌트
    @author: Evan Moon
    @created_at: 2017.09.05
*/

import { Vue, Component, Provide } from 'vue-property-decorator';
import { State, Getter, Action } from 'vuex-class';

import { UserSimple } from 'src/interfaces/User.interface';
import APIService from 'src/services/API.service';
import ImageService from 'src/services/Image.service';

@Component({
    name: 'UserMenu'
})
class UserMenu extends Vue {
    @State('auth') AuthState
    @Getter('getUser') user
    @Getter('getUserProfileSrc') userProfileSrc
    @Getter('hasProfileSrc') hasProfileSrc
    @Action('destroyToken') destroyToken

    public signout (): void {
        this.destroyToken();
    }

    created (): void {
        this.$forceUpdate();
    }
}

export default UserMenu;
