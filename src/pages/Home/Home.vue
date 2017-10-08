<template>
<div class="container-fluid">
    <home-jumbo>
        <div slot="swiper-overlay-text" class="swiper-overlay-text">
            <h1>Connect your creativity with the World!</h1>
            <div>
                <p>The Pixelstairs is dedicated to providing better opportunities</p>
                <p>for their works and another inspired interaction with every artist in the world</p>
            </div>
            <button class="btn btn-primary btn-round" @click="gotoUpload">
                Upload my works
            </button>
        </div>
    </home-jumbo>
    <div class="container">
        <ul class="row cards-wrapper">
            <infinite-scroller
                :delay="10"
                @trigger="addPageIndex"
            >
                <!-- SSR FOR SEO -->
                <li class="col-12 col-md-6 col-lg-3" v-for="artwork in firstPageArtworks.contents">
                    <artwork-card
                        :art-id="artwork.id"
                        :title="artwork.title"
                        :image="artwork.image"
                        :author-name="artwork.user.nickname"
                        :author-profile="artwork.user.profileImg"
                        :view-count="artwork.counts.view"
                        :like-count="artwork.counts.like"
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
                        :view-count="artwork.counts.view"
                        :like-count="artwork.counts.like"
                    />
                </li>
            </infinite-scroller>
        </ul>
    </div>

    <!-- MODAL -->
    <signup-modal ref="signupModal"></signup-modal>
    <!-- /MODAL -->
</div>
</template>

<style lang="scss" scoped>
    @import './Home';
</style>

<script>
    import Home from './Home';
    export default Home;
</script>
