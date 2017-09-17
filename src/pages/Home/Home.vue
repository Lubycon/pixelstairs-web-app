<template>
<div class="container-fluid">
    <home-jumbo></home-jumbo>
    <div class="container">
        <ul class="row">
            <!-- SSR FOR SEO -->
            <li class="col-4" v-for="artwork in firstPageArtworks.contents">
                <artwork-card
                    :art-id="artwork.id"
                    :title="artwork.title"
                    :image="artwork.image"
                    :author-name="artwork.user.nickname"
                    :author-profile="artwork.user.profileImg"
                />
            </li>
            <!-- /SSR FOR SEO -->
            <li class="col-12 col-lg-4" v-for="artwork in artworks">
                <artwork-card
                    :art-id="artwork.id"
                    :title="artwork.title"
                    :image="artwork.image"
                    :author-name="artwork.user.nickname"
                    :author-profile="artwork.user.profileImg"
                />
            </li>
        </ul>
    </div>
</div>
</template>

<style lang="scss" scoped>
    @import './Home';
</style>

<script>
    import Home from './Home';
    export default Home;
</script>
