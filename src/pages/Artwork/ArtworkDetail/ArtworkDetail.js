/*
    @name: ArtworkDetail.js
    @desc: 아트워크 디테일 스태틱 페이지 컴포넌트
    @author: Evan Moon
    @created_at: 2017.09.02
*/
import { mapGetters } from 'vuex';
import ImageService from 'src/services/Image.service';

export default {
    name: 'ArtworkDetail',
    metaInfo () {
        return {
            title: this.artworkData ? this.artworkData.title + ' - Pixelstairs' : 'Loading...',
            meta: [{
                name: 'description', content: this.artworkData ? this.artworkData.desc : 'Loading...'
            }, {
                property: 'og:title', content: this.artworkData ? this.artworkData.title + ' - Pixelstairs' : 'Loading...'
            }, {
                property: 'og:image', content: this.artworkData ? this.artworkData.image.file + '640' : '/assets/imgs/ogImage.jpg'
            }, {
                property: 'og:url', content: this.artworkData ? `https://dev.pixelstairs.com/artwork/detail/${this.artworkData.id}` : 'https://dev.pixelstairs.com'
            }]
        };
    },
    props: {
        artId: {
            type: String,
            required: true
        }
    },
    asyncData ({ store, route }) {
        return store.dispatch('setArtworkDetailView', route.params.artId);
    },
    computed: {
        artworkImage () {
            return ImageService.getResolution(this.artworkData.image, '1920');
        },
        thumbnail () {
            return ImageService.getResolution(this.artworkData.image, '30');
        },
        userProfile () {
            return ImageService.getUserProfile(this.artworkData.user.profileImg);
        },
        ...mapGetters({
            artworkData: 'getArtworkDetailView'
        })
    }
};
