/*
    @name: ArtworkUpload.ts
    @desc: 아트워크 업로드 페이지 컴포넌트
    @author: Evan Moon
    @created_at: 2017.09.05
*/

import APIService from 'src/services/API.service';

import { ARTWORK_UPLOAD_FORM } from 'src/constants/form.constant';
import TagInput from 'src/components/Tag.vue';

export default {
    name: 'ArtworkUpload',
    components: {
        TagInput
    },
    data () {
        return {
            formList: ARTWORK_UPLOAD_FORM,
            previewImgSrc: null,

            artworkFile: null,
            artworkTitle: null,
            artworkTags: [],
            artworkDesc: null,

            pageIndex: 0
        };
    },
    methods: {
        onChangedFile () {
            let reader = new FileReader();
            reader.onload = e => {
                this.previewImgSrc = e.target.result;
            };
            reader.readAsDataURL(this.artworkFile);
        },
        resetFile () {
            this.$refs.fileinput.reset();
        },
        nextPage () {
            this.$validator.validateAll();
            if (this.errors.any()) {
                return null;
            }
            this.pageIndex++;
        },
        prevPage () {
            this.pageIndex--;
        },
        submit () {
            let contentId = null;

            this.postData()
            .then(res => {
                contentId = res.result.id;
                return this.postFile(contentId);
            }, err => {
                if (err) {}
                // Content data upload has been failed
            }).then(res => {
                // All uploading has been succeed
            }, err => {
                if (err) {}
                // File data upload has been failed
            });
        },
        postData () {
            const DATA = {
                title: this.artworkTitle,
                hashTags: this.artworkTags,
                licenseCode: '1101',
                description: this.artworkDesc
            };

            return APIService.resource('contents.upload').post(DATA);
        },
        postFile (contentId) {
            const DATA = {
                contentId,
                file: this.artworkFile
            };
            let form = new FormData();

            Object.keys(DATA).forEach(v => {
                form.append(v, DATA[v]);
            });

            return APIService.resource('contents.image', {
                id: contentId
            }).post(form);
        }
    }
};
