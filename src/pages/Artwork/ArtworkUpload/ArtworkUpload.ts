/*
    @name: ArtworkUpload.ts
    @desc: 아트워크 업로드 페이지 컴포넌트
    @author: Evan Moon
    @created_at: 2017.09.05
*/

import { Vue, Component, Provide } from 'vue-property-decorator';
import { ArtworkForm } from 'src/interfaces/Form.interface';
import APIService from 'src/services/API.service';

import { ARTWORK_UPLOAD_FORM } from 'src/constants/form.constant';
import TagInput from 'src/components/Tag.vue';

interface ArtworkData {
    title: string;
    hashTags: string[];
    licenseCode: string;
    description: string;
}
interface UploadFileData {
    contentId: string;
    file: File;
}

@Component({
    name: 'ArtworkUpload',
    components: {
        TagInput
    }
})
class ArtworkUpload extends Vue {
    public $refs: {
        fileinput: any;
    }
    @Provide() formList: Array<ArtworkForm> = ARTWORK_UPLOAD_FORM;
    @Provide() previewImgSrc: string = null;

    @Provide() artworkFile: File = null;
    @Provide() artworkTitle: string = null;
    @Provide() artworkTags: string[] = [];
    @Provide() artworkDesc: string = null;

    @Provide() pageIndex: number = 0;

    public onChangedFile (): void {
        let reader = new FileReader();
        reader.onload = (e: any) => {
            this.previewImgSrc = e.target.result;
        }
        reader.readAsDataURL(this.artworkFile);
    }

    resetFile (): void {
        this.$refs.fileinput.reset();
    }

    nextPage (): void {
        this.$validator.validateAll();
        if((<any>this).errors.any()) {
            return null;
        }
        this.pageIndex++;
    }

    prevPage (): void {
        this.pageIndex--;
    }
}

export default ArtworkUpload;
