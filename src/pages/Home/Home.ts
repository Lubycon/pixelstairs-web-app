import { Vue, Component, Provide, Watch } from 'vue-property-decorator';
import { Artwork } from 'src/interfaces/Artwork.interface';

import APIService from 'src/services/API.service';

import ArtworkCard from 'src/components/cards/Artwork-card/Artwork-card.vue';

@Component({
    name: 'Home',
    components: {
        ArtworkCard
    }
})
class Home extends Vue {
    @Provide() pageIndex: number = 1;
    @Provide() totalCount: number = 0;
    @Provide() artworks: Artwork[] = [];
    @Provide() loadingMsg: string = 'Loading...';

    @Watch('pageIndex')
    getContents(val: number): any {
        return APIService.resource('contents.list').get({
            pageIndex: this.pageIndex
        }).then(res => {
            this.totalCount = res.result.totalCount;
            this.addToArtworkList(res.result.contents);
        });
    }

    addToArtworkList(artworks:Artwork[]): void {
        this.$set(this, 'artworks', [...this.artworks, ...artworks]);
    }

    created () {

    }

    mounted () {
        this.getContents(this.pageIndex);
    }
}
export default Home;
