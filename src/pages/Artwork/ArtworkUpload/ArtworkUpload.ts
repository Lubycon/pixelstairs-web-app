/*
    @name: ArtworkUpload.ts
    @desc: 아트워크 업로드 페이지 컴포넌트
    @author: Evan Moon
    @created_at: 2017.09.05
*/

import { Vue, Component, Provide } from 'vue-property-decorator';
import APIService from 'src/services/API.service';

@Component({
    name: 'ArtworkUpload'
})
class ArtworkUpload extends Vue {
    @Provide() uploadedFile: File = null;

    mounted () {
        console.log(this.$refs.fileinput);
    }
}

export default ArtworkUpload;
