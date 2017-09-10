/*
    @name UserMenu.ts
    @desc: 유저 로그인 메뉴 컴포넌트
    @author: Evan Moon
    @created_at: 2017.09.05
*/

export default {
    name: 'UserMenu',
    methods: {
        signout () {
            this.destroyToken();
        }
    }
};

// @Component({
//     name: 'UserMenu'
// })
// class UserMenu extends Vue {
//     @State('auth') AuthState
//     @Getter('getUser') user
//     @Getter('getUserProfileSrc') userProfileSrc
//     @Getter('hasProfileSrc') hasProfileSrc
//     @Action('destroyToken') destroyToken
//
//     public
// }
//
// export default UserMenu;
