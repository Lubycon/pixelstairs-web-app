/*
    @name: ArtworkUpload.js
    @desc: 아트워크 업로드 페이지 컴포넌트
    @author: Evan Moon
    @created_at: 2017.09.05
*/

import APIService from 'src/services/API.service';

import { ARTWORK_UPLOAD_FORM } from 'src/constants/form.constant';

import ArtworkFileStep from 'src/components/forms/steps/ArtworkFile.step.vue';
import ArtworkTitleStep from 'src/components/forms/steps/ArtworkTitle.step.vue';
import ArtworkDescStep from 'src/components/forms/steps/ArtworkDesc.step.vue';
import ArtworkTagsStep from 'src/components/forms/steps/ArtworkTags.step.vue';

export default {
    name: 'ArtworkUpload',
    components: {
        ArtworkFileStep,
        ArtworkTitleStep,
        ArtworkDescStep,
        ArtworkTagsStep
    },
    data () {
        return {
            formList: ARTWORK_UPLOAD_FORM,
            previewImg: null,

            artworkFile: null,
            artworkTitle: null,
            artworkTags: [],
            artworkDesc: null,

            pageIndex: 0,
            pageType: null
        };
    },
    methods: {
        onChangeFile (data) {
            this.artworkFile = data.file;
            this.previewImg = data.preview;
        },
        nextPage () {
            const CURRENT_FORM = this.formList[this.pageIndex - 1];
            if (CURRENT_FORM) {
                this.$validator.validateAll();
                if (!this.errors.has(CURRENT_FORM.type)) {
                    this.pageIndex++;
                    this.errors.clear();
                }
            }
            else {
                this.pageIndex++;
            }
        },
        prevPage () {
            this.pageIndex--;
        },
        validate () {
            this.$validator.validateAll();
            this.$validator.validate('tag', this.artworkTags);
        },
        submit () {
            this.validate();
            if (this.errors.any()) {
                return false;
            }

            let contentId = null;

            this.postData()
            .then(res => {
                contentId = res.result.id;
                return this.postFile(contentId);
            }, err => {
                if (err) {}
                // Content data upload has been failed
            }).then(res => {
                this.$router.push({
                    name: 'artwork-upload-success',
                    params: {
                        artId: res.result.id
                    }
                });
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
