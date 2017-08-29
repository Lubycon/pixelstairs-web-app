<template>
<div class="row navbar fixed-top">
    <div class="col"></div>
    <div class="col header--global-logo">
        <img :src="logoSrc" alt="pixelstairs-text-logo">
    </div>
    <div class="col header--user-menu">
        <router-link to="signin">
            <button class="btn btn-round">
                Login
            </button>
        </router-link>
    </div>
</div>
</template>

<style lang="scss" scoped>
    @import './Header.scss';
</style>

<script lang="ts">
    import Header from './Header.ts';
    export default Header;
</script>
