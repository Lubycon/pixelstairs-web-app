<template>
<div class="container">
    <h1>Your Artwork upload has been successfully completed!</h1>
    <p>
        Your Artwork have been uploaded to the Pixelstairs's new contents feed,<br>
        and some Artworks will be posted to the Pixelstairs main page<br>
        after deliberating on the service itself.
    </p>
    <router-link :to="{ name: 'artwork-detail', params: { artId } }">
        <button class="btn">View uploaded Artwork</button>
    </router-link>
    <router-link :to="{ name: 'home' }">
        <button class="btn">Go to main</button>
    </router-link>
</div>
</template>

<style lang="scss">
    @import './ArtworkUploadSuccess';
</style>

<script>
    import ArtworkUploadSuccess from './ArtworkUploadSuccess';
    export default ArtworkUploadSuccess;
</script>
