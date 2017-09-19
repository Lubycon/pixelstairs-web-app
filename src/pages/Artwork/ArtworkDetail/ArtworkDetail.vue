<template>
<div class="container" v-if="artworkData">

    <section data-name="artwork">
        <div class="row">
            <h1 class="col-12" data-name="title">{{ artworkData.title }}</h1>
        </div>
        <div class="row">
            <div class="col-12" data-name="image">
                <img :src="artworkImage" :style="{ 'background-image': `url(${thumbnail}` }" :alt="`artwork-img-${artworkData.id}`">
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <p v-html="artworkData.description" data-name="description"></p>
            </div>
            <div class="col-12" data-name="tags">
                <tag-input :tags="artworkData.hashTags" :readonly="true"></tag-input>
            </div>
        </div>
    </section>

    <section data-name="counter">
        <div class="row">
            <ul class="col-12">
                <li data-name="view">
                    <i class="pxs-eye"></i>
                    <span><strong>{{ artworkData.counts.view }}</strong> Views</span>
                </li>
                <li data-name="like">
                    <i class="pxs-heart"></i>
                    <span><strong>{{ artworkData.counts.like }}</strong> Likes</span>
                </li>
            </ul>
        </div>
    </section>

    <section data-name="author">
        <div class="row">
            <p class="col-12 row"><small>Artwork by</small></p>
            <div class="col-12 row align-items-center">
                <div class="col col-auto" data-name="author-profile">
                    <img
                        :src="userProfile"
                        :alt="artworkData.user.nickname"
                        :title="artworkData.user.nickname"
                    >
                </div>
                <div class="col" data-name="author-name">
                    <h2>{{ artworkData.user.nickname }}</h2>
                    <p>Uploaded at <strong data-name="uploaded-date">{{ artworkData.createdAt | moment('MMM. DD. YYYY') }}</strong></p>
                </div>
            </div>
        </div>
    </section>

</div>
</template>

<style lang="scss" scoped>
    @import './ArtworkDetail';
</style>

<script>
    import ArtworkDetail from './ArtworkDetail';
    export default ArtworkDetail;
</script>
