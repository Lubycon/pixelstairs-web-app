<template>
<div class="container">
    <div class="row">
        <div class="col-3">
            <img v-if="!this.user.profileImg" :src="userProfileSrc">
            <img v-else :src="this.user.profileImg">
        </div>
        <div class="col-9"></div>
    </div>
    <ul class="row">

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
