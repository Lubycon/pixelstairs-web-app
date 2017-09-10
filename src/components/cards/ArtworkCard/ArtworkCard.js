/*
    @name: ArtworkCard.ts
    @desc: 아트워크 카드 컴포넌트
    @author: Evan Moon
    @created_at: 2017.09.02
*/

export default {
    name: 'Artwork-card',
    props: {
        artId: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        authorName: {
            type: String,
            required: true
        },
        authorProfile: {

        },
        image: {

        }
    },
    data () {
        return {
            thumbnail: null
        };
    },

    created () {
        let thumbnail;

        if (this.image.isPixelOwn) {
            thumbnail = this.image.file + '30';
            this.$set(this.image, 'file', this.image.file + '640');
        }
        else {
            thumbnail = this.image.file;
        }

        this.$set(this, 'thumbnail', thumbnail);
    }
};
