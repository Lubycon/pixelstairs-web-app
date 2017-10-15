/*
    @name: UserProfile.js
    @desc: 유저 프로필 페이지 컴포넌트
    @author: Evan Moon
    @created_at: 2017.09.09
*/
import { mapGetters, mapActions } from 'vuex';
import APIService from 'src/services/API.service';
import { PagerMixin } from 'src/mixins/pager.mixin';
import { DEFAULT_USER_PROFILE } from 'src/constants';
import ArtworkCard from 'src/components/cards/ArtworkCard.vue';

export default {
    name: 'UserProfile',
    mixins: [ PagerMixin ],
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
            defaultProfile: DEFAULT_USER_PROFILE,
            pageIndex: 2,
            artworks: []
        };
    },
    computed: {
        isMyProfile () {
            return this.isAuthorized && (this.user.id === this.me.id);
        },
        ...mapGetters({
            isAuthorized: 'isAuthorized',
            me: 'getAuthUser',
            user: 'getUserData',
            firstUserContents: 'getUserContents'
        })
    },
    watch: {
        pageIndex (val) {
            if (this.isDone) {
                return false;
            }

            this.isBusy = true;
            return APIService.resource('contents.list').get({
                pageIndex: this.pageIndex,
                filter: `userId:${this.$route.params.userId}`
            }).then(res => {
                if (!res.result) {
                    this.isDone = true;
                    this.isBusy = false;
                    return false;
                }
                else {
                    this.addToArtworkList(res.result.contents);
                    this.isBusy = false;

                    this.isPageDoneCheck({
                        totalPageCount: res.result.totalCount,
                        currentPageIndex: res.result.currentPage,
                        lastPage: res.result.contents
                    });
                }
            });
        }
    },
    methods: {
        addToArtworkList (artworks) {
            this.$set(this, 'artworks', [...this.artworks, ...artworks]);
        },
        ...mapActions({
            clearUserData: 'clearUserDetailView'
        })
    },
    mounted () {
        if (!this.firstUserContents.contents) {
            this.isDone = true;
        }
    },
    destroyed () {
        this.clearUserData();
    }
};
