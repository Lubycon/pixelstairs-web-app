<template>
<div class="container">
    <div class="row" data-name="user">
        <div class="col-12" data-name="user-profile">
            <img v-if="!user.profileImg" :src="defaultProfile">
            <img v-else :src="user.profileImg.file + '320'">
        </div>
        <div class="col-12" data-name="user-info">
            <h1>{{ user.nickname }}</h1>
            <h4>{{ user.email }}</h4>
        </div>
        <div class="col-12" v-if="isMyProfile" data-name="user-control">
            <b-button class="btn-border" :to="{ name: 'user-setting', params: { userId: me.id } }">
                Setting
            </b-button>
            <b-button v-if="me.status === 'inactive'" class="btn btn-activate" :to="{ name: 'auth-grade' }">Activate</b-button>
        </div>
    </div>
    <ul class="row" data-name="artworks">
        <!-- SSR FOR SEO -->
        <li class="col-12 col-md-6 col-lg-3" v-for="artwork in firstUserContents.contents">
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
    <div data-name="no-artworks" v-if="!firstUserContents.contents">
        <p>You have no artwork</p>
        <b-button :to="{ name: 'artwork-upload' }">
            Upload
        </b-button>
    </div>
</div>
</template>

<style lang="scss">
    @import './UserProfile';
</style>

<script>
    import UserProfile from './UserProfile';
    export default UserProfile;
</script>
