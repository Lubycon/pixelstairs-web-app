/*
    @name: Home.js
    @desc: 메인페이지 컴포넌트
    @author: Evan Moon
    @created_at: 2017.08.26
*/
import { mapGetters, mapActions } from 'vuex';
import APIService from 'src/services/API.service';
import HomeJumbo from 'src/components/jumbotrons/HomeJumbo.vue';
import ArtworkCard from 'src/components/cards/ArtworkCard.vue';
import InfiniteScroller from 'src/components/InfiniteScroller.vue';
import SignupModal from 'src/components/modals/SignupModal.vue';

export default {
    name: 'Home',
    components: {
        HomeJumbo,
        ArtworkCard,
        InfiniteScroller,
        SignupModal
    },
    asyncData ({ store }) {
        return store.dispatch('setArtworkList', {
            pageIndex: 1,
            sort: 'latest:desc'
        });
    },
    data () {
        return {
            pageIndex: 2,
            totalCount: 0,
            loadingMsg: 'Loading...',
            artworks: [],
            isBusy: false
        };
    },
    computed: {
        ...mapGetters({
            isAuthorized: 'isAuthorized',
            firstPageArtworks: 'getArtworkList'
        })
    },
    watch: {
        pageIndex (val) {
            this.isBusy = true;
            return APIService.resource('contents.list').get({
                pageIndex: this.pageIndex,
                sort: 'latest:desc'
            }).then(res => {
                this.totalCount = res.result.totalCount;
                this.addToArtworkList(res.result.contents);
                this.isBusy = false;
            });
        }
    },
    methods: {
        addToArtworkList (artworks) {
            console.log(this.pageIndex);
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
        addPageIndex () {
            if (!this.isBusy) {
                this.pageIndex++;
            }
        },
        hideModal () {
            this.$refs.signupModal.hide();
        },
        ...mapActions({
            clearArtworks: 'clearArtworkList'
        })
    },
    destroyed () {
        this.clearArtworks();
    }
};
