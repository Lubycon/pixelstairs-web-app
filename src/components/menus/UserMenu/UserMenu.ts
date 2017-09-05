/*
    @name UserMenu.ts
    @desc: 유저 로그인 메뉴 컴포넌트
    @author: Evan Moon
    @created_at: 2017.09.05
*/

import { Vue, Component } from 'vue-property-decorator';
import { State, Getter, Action } from 'vuex-class';

import { UserSimple } from 'src/interfaces/User.interface';
import ImageService from 'src/services/Image.service';
import APIService from 'src/services/API.service';

@Component({
    name: 'UserMenu'
})
class UserMenu extends Vue {
    @State('auth') AuthState
    @Getter('getUser') user
    @Action('destroyToken') destroyToken;

    public getUserProfile (): string {
        return ImageService.getUserProfile(this.user.profile);
    }

    public signout (): void {
        this.destroyToken();
    }
}

export default UserMenu;
