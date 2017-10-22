/*
    @name: Home.js
    @desc: 메인페이지 컴포넌트
    @author: Evan Moon
    @created_at: 2017.08.26
*/
import { mapGetters, mapActions } from 'vuex';
import APIService from 'src/services/API.service';
import { PagerMixin } from 'src/mixins/pager.mixin';
import HomeJumbo from 'src/components/jumbotrons/HomeJumbo.vue';
import ArtworkCard from 'src/components/cards/ArtworkCard.vue';
import SignupModal from 'src/components/modals/SignupModal.vue';
import ARTWORK_STORE from 'src/constants/artwork.store.constant';
import { ARTWORK_FILTER_TYPE } from 'src/constants/artwork.filter.constant';

export default {
    name: 'Home',
    mixins: [ PagerMixin ],
    components: {
        HomeJumbo,
        ArtworkCard,
        SignupModal
    },
    asyncData ({ store }) {
        return store.dispatch(ARTWORK_STORE.SET.LIST, {
            pageIndex: 1,
            sort: 'latest:desc'
        });
    },
    data () {
        return {
            pageIndex: 1,
            preventClickable: false,
            filtering: ARTWORK_FILTER_TYPE,
            currentFilterd: ARTWORK_FILTER_TYPE[0].filterKey,
            artworks: []
        };
    },
    computed: {
        ...mapGetters({
            isAuthorized: 'isAuthorized',
            firstPageArtworks: ARTWORK_STORE.GET.LIST
        })
    },
    watch: {
        pageIndex (pageIndex) {
            if (this.isDone) {
                return false;
            }

            this.isBusy = true;
            return APIService.resource('contents.list').get({
                pageIndex,
                sort: 'latest:desc'
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
        gotoUpload () {
            if (this.isAuthorized) {
                this.$router.push({ name: 'artwork-upload' });
            }
            else {
                this.$refs.signupModal.show();
            }
        },
        hideModal () {
            this.$refs.signupModal.hide();
        },
        ...mapActions({
            clearArtworks: ARTWORK_STORE.DESTROY.LIST
        }),
        filteringArtwork (filterKey) {
            /**
             * @name filteringArtwork
             * @param { a:String, b: { pageIndex: Number, sort: String } }
             * @returns { sort value: latest, featured }
             * @description 최신, 인기순에 대한 filtering을 한다.
             */
            this.preventClickable = true;
            if (filterKey === this.currentFilterd && !this.preventClickable) {
                console.log('prevent clickable');
                // Prevent click same filter button && loading
                return false;
            }
            this.currentFilterd = filterKey;
            this.initializeArtworks();
            this.$store.dispatch(ARTWORK_STORE.SET.LIST, {
                pageIndex: 1,
                sort: `${filterKey}:desc`
            })
            .then(res => {
                this.isBusy = false;
                this.preventClickable = false;
            });
        },
        initializeArtworks () {
            /**
             * @name initializeArtworks
             * @description artwork를 filtering 하기 전, store 및 Local data list를 초기화 하는 함수
             */
            this.isBusy = true;
            this.clearArtworks();
            this.artworks = [];
        }
    },
    destroyed () {
        this.clearArtworks();
    }
};
