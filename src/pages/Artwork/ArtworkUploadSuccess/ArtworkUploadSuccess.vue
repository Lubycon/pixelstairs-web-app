<template>
<div class="container row">
    <div class="col-12 col-md-6 col-lg-4 card card--center-form">
        <div data-section="form-desc">
            <h1>Your Artwork upload has been successfully completed!</h1>
            <p>
                Your Artwork have been uploaded to the Pixelstairs's new contents feed,<br>
                and some Artworks will be posted to the Pixelstairs main page<br>
                after deliberating on the service itself.
            </p>
        </div>
        <div data-section="control" class="row">
            <div class="col-12 col-sm-6">
                <router-link :to="{ name: 'artwork-detail', params: { artId } }">
                    <button class="btn">View uploaded Artwork</button>
                </router-link>
            </div>
            <div class="col-12 col-sm-6">
                <router-link :to="{ name: 'home' }">
                    <button class="btn">Go to main</button>
                </router-link>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss">
    @import './ArtworkUploadSuccess';
</style>

<script>
    import ArtworkUploadSuccess from './ArtworkUploadSuccess';
    export default ArtworkUploadSuccess;
</script>
