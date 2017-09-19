/*
    @name: ArtworkDetail.js
    @desc: 아트워크 디테일 스태틱 페이지 컴포넌트
    @author: Evan Moon
    @created_at: 2017.09.02
*/
import { mapGetters, mapActions } from 'vuex';
import APIService from 'src/services/API.service';
import ImageService from 'src/services/Image.service';
import TagInput from 'src/components/Tag.vue';
import LikeButton from 'src/components/buttons/LikeButton.vue';

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
    components: {
        TagInput, LikeButton
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
    },
    methods: {
        postLike (likeValue) {
            const id = this.artworkData.id;
            if (!id) {
                return false;
            }
            this.setArtworkLike(likeValue);

            let req = APIService.resource('contents.like', { id });
            if (likeValue) {
                req = req.post;
            }
            else {
                req = req.delete;
            }

            req().then(res => {}, err => {
                if (err && err.status === 403) {
                    console.error('Need Signin!');
                }
            });
        },
        ...mapActions({
            setArtworkLike: 'setArtworkLike',
            clearArtwork: 'clearArtworkDetailView'
        })
    },
    destroyed () {
        this.clearArtwork();
    }
};
