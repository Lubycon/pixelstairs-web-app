<template>
<div class="container">
    <section data-section="intro">
        <h1>Upload your Awwwesome Artwork to Pixelstairs</h1>
        <p>
            Your artwork will be posted under the terms of Pixelstairs Service<br>
            and will be subject to the Creative Commons licenseas stipulated.
        </p>
    </section>

    <section data-section="pages">
        <div v-for="(page, idx) in formList" v-if="idx+1 === pageIndex">

            <div data-form="image" v-if="page.type === 'image-upload'">
                <img v-show="previewImgSrc" :src="previewImgSrc" alt="">
                <h3 v-if="artworkFile">{{ artworkFile.name }}</h3>
                <b-form-file
                    class="file-upload--dropzone"
                    ref="fileinput"
                    accept="image/jpeg, image/png, image/gif"
                    v-model="artworkFile"
                    @input="onChangedFile"
                ></b-form-file>
            </div>

            <div data-form="title" v-if="page.type === 'title'">
                <b-form-input
                    :class="{ error: errors.has('title') }"
                    name="title"
                    type="text"
                    placeholder="Enter the title of your artwork"
                    v-validate="'required'"
                    v-model.trim="artworkTitle"
                ></b-form-input>
            </div>

            <div data-form="tag" v-if="page.type === 'tag'">
                <tag-input :tags="artworkTags"></tag-input>
            </div>

            <div data-form="description" v-if="page.type === 'description'">
                <b-form-textarea
                    placeholder="Enter the description of your artwork"
                    :rows="3"
                    :max-rows="6"
                    v-model.trim="artworkDesc"
                ></b-form-textarea>
            </div>
        </div>
    </section>

    <section data-section="control">
        <button class="btn" @click="prevPage">Prev</button>
        <button class="btn" @click="resetFile">reset</button>
        <button class="btn" @click="nextPage">Next</button>
        <button v-if="pageIndex >= formList.length" class="btn" @click="submit">Submit</button>
    </section>
</div>
</template>

<style lang="scss" scoped>
    @import './ArtworkUpload';
</style>

<script lang="ts">
    import ArtworkUpload from './ArtworkUpload';
    export default ArtworkUpload;
</script>
