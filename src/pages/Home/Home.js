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

export default {
    name: 'Home',
    components: {
        HomeJumbo, ArtworkCard
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
            artworks: []
        };
    },
    computed: {
        ...mapGetters({
            firstPageArtworks: 'getArtworkList'
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
        ...mapActions({
            clearArtworks: 'clearArtworkList'
        })
    },
    destroyed () {
        this.clearArtworks();
    }
};
