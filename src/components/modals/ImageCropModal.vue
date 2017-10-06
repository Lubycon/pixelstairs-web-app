<template>
<b-modal hide-footer ref="modal">
    <no-ssr placeholder="Loading">
        <vueCropper
            ref="cropper"
            :img="image"
            :outputSize="option.outputSize"
            :outputType="option.outputType"
            :canScale="false"
            :fixed="true"
            :autoCrop="true"
            :autoCropWidth="300"
			:autoCropHeight="300"
            :fixedNumber="[1,1]"
        />
    </no-ssr>
    <b-button class="crop-btn" @click="crop">Crop</b-button>
</b-modal>
</template>

<style lang="scss" scoped>
.vue-cropper {
    height: 500px;
}
button.crop-btn {
    margin-top: 30px;
    width: 100%;
}
</style>

<script>
import NoSSR from 'vue-no-ssr';
const VueCropper = process.browser ? require('vue-cropper') : null;

export default {
    name: 'ImageCropModal',
    components: {
        'no-ssr': NoSSR,
        VueCropper
    },
    props: {
        image: {
            required: true
        },
        outputType: {
            type: String,
            default: 'base64'
        }
    },
    data () {
        return {
            option: {
                outputSize: 1,
                outputType: 'jpeg'
            }
        };
    },
    methods: {
        show () {
            this.$refs.modal.show();
            this.$emit('shown');
        },
        hide () {
            this.$refs.modal.hide();
            this.$emit('hidden');
        },
        crop () {
            if (this.outputType === 'base64') {
                this.cropToBase64();
            }
            else if (this.outputType === 'blob') {
                this.cropToBlob();
            }
            else {
                throw new Error(`There is no type ${this.outputType} in ImageCropModal component`);
            }
        },
        cropToBase64 () {
            this.$refs.cropper.getCropData(res => {
                this.$emit('cropped', res);
                this.hide();
            });
        },
        cropToBlob () {
            this.$refs.cropper.getCropBlob(res => {
                this.$emit('cropped', res);
                this.hide();
            });
        }
    }
};
</script>
