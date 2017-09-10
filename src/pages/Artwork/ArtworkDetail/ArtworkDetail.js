/*
    @name: ArtworkDetail.ts
    @desc: 아트워크 디테일 페이지 컴포넌트
    @author: Evan Moon
    @created_at: 2017.09.02
*/
import { mapGetters } from 'vuex';
import APIService from 'src/services/API.service';

export default {
    name: 'ArtworkDetail',
    props: {
        artId: {
            type: String,
            required: true
        }
    },
    asyncData ({ store, route }) {
        // return store.dispatch('setArtwork', route.params.artId);
        return APIService.resource('contents.detail', {
            id: route.params.artId
        }).get().then(res => {
            console.log('res => ', res);
            console.log('route => ', route.matched[0].components.content);
        });
    },
    data () {
        return {
            artworkImage: null,
            thumbnail: null
        };
    },
    computed: {
        ...mapGetters({
            artworkData: 'getArtwork'
        })
    }
};
