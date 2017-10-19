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
import SignupModal from 'src/components/modals/SignupModal.vue';
import ARTWORK_STORE from 'src/constants/artwork.store.constant';

export default {
    name: 'Home',
    components: {
        HomeJumbo, ArtworkCard, SignupModal
    },
    asyncData ({ store }) {
        return store.dispatch(ARTWORK_STORE.SET.LIST, {
            pageIndex: 1,
            sort: 'latest:desc'
        });
    },
    data () {
        return {
            pageIndex: 2,
            totalCount: 0,
            loadingMsg: 'Loading...',
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
        pageIndex (val) {
            return APIService.resource('contents.list').get({
                pageIndex: this.pageIndex,
                sort: 'latest:desc'
            }).then(res => {
                this.totalCount = res.result.totalCount;
                this.addToArtworkList(res.result.contents);
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
        })
    },
    destroyed () {
        this.clearArtworks();
    }
};
