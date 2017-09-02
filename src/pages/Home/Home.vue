<template>
<div class="container-fluid">

    <div class="container">
        <div v-if="artworks.length < 1">
            {{ loadingMsg }}
        </div>
        <ul class="row" v-if="artworks.length > 0">
            <li class="col-4" v-for="artwork in artworks">
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
    @import './Home.scss';
</style>

<script lang="ts">
    import Home from './Home.ts';
    export default Home;
</script>
