/*
    @name: ArtworkUpload.ts
    @desc: 아트워크 업로드 페이지 컴포넌트
    @author: Evan Moon
    @created_at: 2017.09.05
*/

import { Vue, Component, Provide } from 'vue-property-decorator';
import { Response } from 'src/interfaces/Response.interface';

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

    onChangedFile (): void {
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

    submit (): void {
        let contentId: string = null;

        this.postData()
        .then(res => {
            contentId = res.result.id;
            return this.postFile(contentId);
        }, err => {
            // Content data upload has been failed
        }).then(res =>{
            // All uploading has been succeed
        }, err => {
            // File data upload has been failed
        });
    }

    postData (): Promise<Response> {
        const DATA: ArtworkData = {
            title: this.artworkTitle,
            hashTags: this.artworkTags,
            licenseCode: '1101',
            description: this.artworkDesc
        };

        return APIService.resource('contents.upload').post(DATA);
    }

    postFile (contentId: string): Promise<Response> {
        const DATA: UploadFileData = {
            contentId,
            file: this.artworkFile
        };
        let form: FormData = new FormData();

        Object.keys(DATA).forEach((v: any) => {
            form.append(v, DATA[v]);
        });

        return APIService.resource('contents.image', {
            id: contentId
        }).post(form);
    }
}

export default ArtworkUpload;
