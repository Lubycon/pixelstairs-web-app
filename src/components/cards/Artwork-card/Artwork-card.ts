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
        if(this.image.isPixelOwn) {
            this.$set(this, 'thumbnail', this.image.file + '30');
            this.image.file += '640';
        }
    }
}

export default ArtworkCard;
