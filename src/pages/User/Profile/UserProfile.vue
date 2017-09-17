<template>
<div class="container">
    <div class="row">
        <div class="col-3">
            <img v-if="!user.profileImg" :src="defaultProfile">
            <img v-else :src="user.profileImg.file + '320'">
        </div>
        <div class="col-9">
            <h1>{{ user.nickname }}</h1>
            <h4>{{ user.email }}</h4>
        </div>
    </div>
    <ul class="row">
        <!-- SSR FOR SEO -->
        <li class="col-12 col-lg-4" v-for="artwork in firstUserContents.contents">
            <artwork-card
                :art-id="artwork.id"
                :title="artwork.title"
                :image="artwork.image"
                :author-name="artwork.user.nickname"
                :author-profile="artwork.user.profileImg"
            />
        </li>
        <!-- /SSR FOR SEO -->
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
</template>

<style lang="scss">
    @import './UserProfile';
</style>

<script>
    import UserProfile from './UserProfile';
    export default UserProfile;
</script>
