/*
    @name UserMenu.js
    @desc: 유저 로그인 메뉴 컴포넌트
    @author: Evan Moon
    @created_at: 2017.09.05
*/
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'UserMenu',
    computed: {
        ...mapGetters({
            user: 'getUser',
            userProfileSrc: 'getUserProfileSrc',
            hasProfileSrc: 'hasProfileSrc'
        })
    },
    methods: {
        ...mapActions({
            destroyToken: 'destroyToken'
        }),
        signout () {
            this.destroyToken();
        }
    }
};
