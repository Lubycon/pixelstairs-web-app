<template>
<div data-form="artwork-file">
    <div data-type="form-desc">
        <h1>Upload your work!</h1>
        <p>
            You can upload <strong>jpg, png, gif</strong> extensions.<br>
            If you want your work to be printed, we recommend uploading works using <strong>CMYK</strong> channels.
        </p>
    </div>
    <image-preview
        :image="preview"
        alt="image-preview"
        title="image-preview"
        @click="open"
    />
    <b-form-file
        name="file"
        v-show="!preview"
        class="file-upload--dropzone"
        :class="{ 'has-error': this.errors.any() }"
        ref="fileinput"
        accept="image/jpeg, image/png, image/gif"
        v-model="file"
        v-validate="'required'"
        @input="onChange"
    ></b-form-file>
    <div class="replace-btn" v-if="preview">
        <b-button size="sm" class="btn-border" @click="open">
            Replace image
        </b-button>
    </div>
</div>
</template>

<style lang="scss" scoped>
.replace-btn {
    margin-top: 20px;
    text-align: right;
}
</style>

<script>
import $ from 'jquery';
import ImagePreview from 'src/components/ImagePreview.vue';

export default {
    name: 'ArtworkFileStep',
    inject: [ '$validator' ],
    components: {
        ImagePreview
    },
    data () {
        return {
            file: null,
            preview: null
        };
    },
    methods: {
        onChange () {
            let reader = new FileReader();
            reader.onload = e => {
                this.preview = e.target.result;

                this.$emit('change', {
                    file: this.file,
                    preview: this.preview
                });
            };
            reader.readAsDataURL(this.file);
        },
        reset () {
            this.$refs.fileinput.reset();
        },
        open () {
            $(this.$refs.fileinput.$el).find('input').trigger('click');
        }
    }
};
</script>
