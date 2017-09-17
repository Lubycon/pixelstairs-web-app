/*
    @name: UserProfile.js
    @desc: 유저 프로필 페이지 컴포넌트
    @author: Evan Moon
    @created_at: 2017.09.09
*/
import { mapGetters, mapActions } from 'vuex';
// import APIService from 'src/services/API.service';
import { DEFAULT_USER_PROFILE } from 'src/constants';
import ArtworkCard from 'src/components/cards/ArtworkCard/ArtworkCard.vue';

export default {
    name: 'UserProfile',
    components: {
        ArtworkCard
    },
    props: {
        userId: {
            type: String,
            required: true
        }
    },
    asyncData ({ store, route }) {
        return store.dispatch('setUserDetailView', route.params.userId);
    },
    data () {
        return {
            defaultProfile: DEFAULT_USER_PROFILE
        };
    },
    computed: {
        ...mapGetters({
            user: 'getUserData',
            firstUserContents: 'getUserContents'
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
