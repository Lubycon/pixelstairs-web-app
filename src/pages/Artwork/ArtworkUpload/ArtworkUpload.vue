<template>
<div class="container">
    <div class="upload-form">
        <div class="card">
            <section data-section="forms">
                <div data-page="intro" v-if="pageIndex < 1">
                    <h1>Welcome!</h1>
                    <p>
                        Your artwork will be posted under the terms of Pixelstairs.<br>
                        and will be subject to the Creative Commons licenseas stipulated.
                    </p>
                </div>
                <div data-page="steps" v-for="(page, idx) in formList" v-if="idx+1 === pageIndex">
                    <keep-alive>
                        <artwork-file-step v-if="page.type === 'file-upload'" @change="onChange" />
                        <artwork-title-step v-else-if="page.type === 'title'" v-model="artworkTitle" />
                        <artwork-desc-step v-else-if="page.type === 'description'" v-model="artworkDesc" />
                        <artwork-tags-step v-else-if="page.type === 'tag'" :tags="artworkTags" />
                    </keep-alive>
                </div>
            </section>
            <section data-section="control">
                <button
                    v-if="pageIndex > 0"
                    class="btn btn-round float-left"
                    @click="prevPage"
                >
                    Prev
                </button>
                <button
                    v-if="pageIndex < formList.length"
                    class="btn btn-round"
                    :class="{ 'float-right': pageIndex > 0 }"
                    @click="nextPage"
                >
                    {{ pageIndex > 0 ? 'Next' : 'Start'}}
                </button>
                <button
                    v-if="pageIndex >= formList.length"
                    class="btn btn-round float-right"
                    @click="submit"
                >
                    Submit
                </button>
            </section>
        </div>

    </div>
</div>
</template>

<style lang="scss">
    @import './ArtworkUpload';
</style>

<script>
    import ArtworkUpload from './ArtworkUpload';
    export default ArtworkUpload;
</script>
