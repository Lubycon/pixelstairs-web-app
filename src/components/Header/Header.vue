<template>
<div class="row navbar fixed-top">
    <div class="col"></div>
    <div class="col header--global-logo">
        <router-link to="/">
            <img :src="logoSrc" alt="pixelstairs-text-logo">
        </router-link>
    </div>
    <div class="col header--user-menu">
        <div v-if="isAuthorized">
            <user-menu></user-menu>
        </div>
        <div v-else>
            <router-link :to="{ name: 'signin' }">
                <button class="btn btn-round">
                    Login
                </button>
            </router-link>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
    @import './Header';
</style>

<script>
    import Header from './Header';
    export default Header;
</script>
