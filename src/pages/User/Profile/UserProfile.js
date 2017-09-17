/*
    @name: UserProfile.js
    @desc: 유저 프로필 페이지 컴포넌트
    @author: Evan Moon
    @created_at: 2017.09.09
*/
import { mapGetters, mapActions } from 'vuex';
// import APIService from 'src/services/API.service';

export default {
    name: 'UserProfile',
    props: {
        userId: {
            type: String,
            required: true
        }
    },
    asyncData ({ store, route }) {
        return store.dispatch('setUserDetailView', route.params.userId);
    },
    computed: {
        ...mapGetters({
            user: 'getUserData',
            userContents: 'getUserContents'
        })
    },
    methods: {
        ...mapActions({
            clearUserData: 'clearUserDetailView'
        })
    },
    destroyed () {
        this.clearUserData();
    }
};
