<template>
<div class="container">
    <router-link :to="{ name: 'home' }">
        <img :src="logo" alt="">
    </router-link>

    <signin-form @submit="postData"></signin-form>
</div>
</template>

<style lang="scss" scoped>
    @import './Signin';
</style>

<script lang="ts">
    import Signin from './Signin';
    export default Signin;
</script>
