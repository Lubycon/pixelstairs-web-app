import { Vue, Component, Prop, Provide } from 'vue-property-decorator';
import { Image } from 'src/interfaces/Image.interface';

@Component({
    name: 'Artwork-card'
})
class ArtworkCard extends Vue {
    @Prop() title: string;
    @Prop() authorName: string;
    @Prop() authorProfile: Image;
    @Prop() image: Image;

    @Provide() thumbnail: string = null;

    created () {
        let thumbnail: string;

        if(this.image.isPixelOwn) {
            thumbnail = this.image.file + '30';
            this.$set(this.image, 'file', this.image.file + '640');
        }
        else {
            thumbnail = this.image.file;
        }

        this.$set(this, 'thumbnail', thumbnail);
    }
}

export default ArtworkCard;
