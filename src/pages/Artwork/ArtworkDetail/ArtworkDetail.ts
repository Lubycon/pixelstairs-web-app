/*
    @name: ArtworkDetail.ts
    @desc: 아트워크 디테일 페이지 컴포넌트
    @author: Evan Moon
    @created_at: 2017.09.02
*/

import { Vue, Component, Prop, Provide } from 'vue-property-decorator';
import { Artwork } from 'src/interfaces/Artwork.interface';

import APIService from 'src/services/API.service';
import ImageService from 'src/services/Image.service';

import { Image } from 'src/interfaces/Image.interface';

@Component({
    name: 'ArtworkDetail'
})
class ArtworkDetail extends Vue {
    @Prop({ type: String }) artId: string;
    @Provide() isLoading: boolean = false;
    @Provide() artworkData: Artwork = null;
    @Provide() artworkImage: Image = null;
    @Provide() thumbnail: string = null;

    fetchArtworkData(): void {
        this.$set(this, 'isLoading', true);

        return APIService.resource('contents.detail', {
            id: this.artId
        }).get().then(res => {
            this.$set(this, 'isLoading', false);
            this.$set(this, 'artworkData', res.result);

            // Generate Images
            let img = res.result.image;
            let userProfile = res.result.user.profileImg;
            this.$set(this, 'artworkImage', ImageService.getResolution(img));
            this.$set(this, 'thumbnail', ImageService.getResolution(img, 30));
            this.$set(this.artworkData.user, 'profileImg', ImageService.getUserProfile(userProfile))
        }, err => {
            this.$set(this, 'isLoading', false);
        });
    }

    created() {
        this.fetchArtworkData();
    }
}

export default ArtworkDetail;
