<template>
<div class="container">
    <section data-section="intro">
        <h1>Upload your Awwwesome Artwork to Pixelstairs</h1>
        <p>
            Your artwork will be posted under the terms of Pixelstairs Service<br>
            and will be subject to the Creative Commons licenseas stipulated.
        </p>
    </section>
    <section data-section="image">
        <h3 v-if="uploadedFile">{{ uploadedFile.name }}</h3>
        <b-form-file
            class="file-upload--dropzone"
            ref="fileinput"
            v-model="uploadedFile"
            accept="image/jpeg, image/png, image/gif"
        ></b-form-file>
    </section>
    <section data-section="form">

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
