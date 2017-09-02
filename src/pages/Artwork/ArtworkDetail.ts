import { Vue, Component, Prop, Provide } from 'vue-property-decorator';
import { Artwork } from 'src/interfaces/Artwork.interface';

import APIService from 'src/services/API.service';

@Component({
    name: 'ArtworkDetail'
})
class ArtworkDetail extends Vue {
    @Prop({ type: String }) artId: string;
    @Provide() isLoading: boolean = false;
    @Provide() artworkData: Artwork = null;

    fetchArtworkData(): void {
        this.$set(this, 'isLoading', true);

        return APIService.resource('contents.detail', {
            id: this.artId
        }).get().then(res => {
            this.$set(this, 'isLoading', false);
            this.$set(this, 'artworkData', res.result);
        }, err => {
            this.$set(this, 'isLoading', false);
        });
    }

    created() {
        this.fetchArtworkData();
    }
}

export default ArtworkDetail;
