<template>
<div class="container">
    <div v-if="isLoading">Loading....</div>
    <div v-else>
        <section data-section="artwork">
            <div class="row">
                <h1 class="col-12">{{ artworkData.title }}</h1>
            </div>
            <div class="row">
                <div class="col-12" :style="{ 'background-image': thumbnail }">
                    <img :src="artworkImage" :alt="`artwork-img-${artworkData.id}`">
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <p v-html="artworkData.description"></p>
                </div>
                <div class="col-12">
                    <ul>
                        <li v-for="tag in artworkData.hashTags">
                            {{ tag }}
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section data-section="counter">
            <div class="row">
                <ul>
                    <li>
                        {{ artworkData.counts.view }} Views
                    </li>
                    <li>
                        {{ artworkData.counts.like }} Likes
                    </li>
                </ul>
            </div>
        </section>

        <section data-section="author">
            <div class="row">
                <p class="row"><small>Artwork by</small></p>
                <div class="row">
                    <div class="col">
                        <img :src="artworkData.user.profileImg" :alt="`user-${artworkData.user.id}-profile-image`">
                    </div>
                    <div class="col">
                        <h2>{{ artworkData.user.nickname }}</h2>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import './ArtworkDetail';
</style>

<script lang="ts">
import ArtworkDetail from './ArtworkDetail';
export default ArtworkDetail;
</script>
