/*
    @name: Home.ts
    @desc: 메인페이지 컴포넌트
    @author: Evan Moon
    @created_at: 2017.08.26
*/

import APIService from 'src/services/API.service';
import ArtworkCard from 'src/components/cards/ArtworkCard/ArtworkCard.vue';

export default {
    name: 'Home',
    components: {
        ArtworkCard
    },
    data () {
        return {
            pageIndex: 1,
            totalCount: 0,
            artworks: [],
            loadingMsg: 'Loading...'
        };
    },
    watch: {
        pageIndex (val) {
            return APIService.resource('contents.list').get({
                pageIndex: this.pageIndex
            }).then(res => {
                this.totalCount = res.result.totalCount;
                this.addToArtworkList(res.result.contents);
            });
        }
    },
    methods: {
        addToArtworkList (artworks) {
            this.$set(this, 'artworks', [...this.artworks, ...artworks]);
        }
    },
    mounted () {
        this.getContents(this.pageIndex);
    }
};
